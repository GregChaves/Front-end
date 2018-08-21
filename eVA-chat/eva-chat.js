//url de origem dos assets
var origin_url = '//localhost:8080';
//var origin_url = '//35.188.192.132';

//broker url
//var broker_endpoint = '//35.196.226.28:8080/conversations/';
var broker_endpoint = 'https://eva-broker.mybluemix.net/api/conversations/';

 //headers
  var broker_headers = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'PROJECT': 'B2C',
    'CHANNEL': 'Web',
    'API-KEY': '56448193-695a-40b4-9ffc-28891a758034',
    'OS': 'Windows',
    'OS-VERSION': '10',
    'BROWSER': 'Chrome',
    'BROWSER-VERSION': '10x',
    'LOCALE': 'pt-BR',
    'USER-REF': "127.0.0.1",
    'BUSINESS-KEY': ""
  };

var apresentacao = 1;
var videoFim = 0;
var muted = true;
talkify.config.remoteService.host = 'https://talkify.net';
talkify.config.remoteService.apiKey = '850ba188-9681-4302-a99e-14445dd942b9';
talkify.config.remoteService.active = false; //colocar true se for comunicar com as linguagens do talkify
talkify.config.ui.audioControls = {
  enabled: true, //<-- Disable to get the browser built in audio controls
  container: document.getElementById("player-and-voices")
};

//codigo do chat executado depois que carregou os elementos
function chatJQueryCode() {

  'use strict';

  //carrega os estilos do chat
  $('head').append('<link rel="stylesheet" type="text/css" href="' + origin_url + '/css/styles.css" />');
  $('head').append('<link rel="stylesheet" type="text/css" href="https://afeld.github.io/emoji-css/emoji.css" />');

  //variaveis globais
  var globalDialogue = [];
  var sendInputAble = true;
  var receivemessage = new Audio(origin_url + '/assets/sounds/receivemessage.mp3');
  var sentmessage = new Audio(origin_url + '/assets/sounds/sentmessage.mp3');
  var createChat = true; //para o chat ser construido apenas umas vez

  //respostas
  var global_gifjson = {
    'answers': [{
      'text': '<img id="chatTypingGif" src="' + origin_url + '/assets/icons/typing.gif" />'
    }],
    'technicalText': 'loading'
  };
  var global_errorMsg = {
    'answers': [
      {
        'text': '<p>Eita, deu ruim... <i class="em em-grimacing"></i></p><br><p>Dá uma olhada na sua internet pra ver se ela tá funcionando direitinho... Se conseguir, navega no nosso site ou no aplicativo também. Lá você consegue fazer suas trocas, transferências e ver seus pedidos...</p><br><p>Se nada der certo, você pode nos procurar todos os dias das 7h às 23h nos telefones abaixo:</p><br><p>3004-8858 (Capitais e regiões metropolitanas)<br>0800-757-8858 (demais regiões)</p>'
      }
    ]
  };

   //lastSessionCode
  var lastSessionCode = '';
  function setLastSessionCode(value) { lastSessionCode = value; }
  function getLastSessionCode() { return lastSessionCode; }

  //sessionCode
  var sessionCode = '';
  function setSessionCode(value) { sessionCode = value; }
  function getSessionCode() { return sessionCode; }

//sem usar
  var BuildChatHeader = function () {
    var imgLogo = $('<img/>').attr({ 'src': origin_url + '/assets/icons/logotipo.svg' })
      .addClass('eva-chatbox-logotipo');
    var imgClose = $('<img/>').attr({ 'src': origin_url + '/assets/icons/btn-Close.svg' })
      .addClass('eva-chatbox-closebtn')
      .addClass('gtm-element-event')
      .click(hideChat);
    var inner = $('<div>').addClass('inner')
      .append(imgLogo)
      .append(imgClose);
    var html = $('<div>').addClass('eva-chatbox-header')
      .append(inner);
    return html;
  }

  //sem usar
  var BuildChatDateDisplay = function () {
    var date = new Date();
    const weekDays = [
      'Domingo',
      'Segunda-feira',
      'Terça-feira',
      'Quarta-feira',
      'Quinta-feira',
      'Sexta-feira',
      'Sábado'
    ];
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro'
    ];

    var currentWeekDay = weekDays[date.getDay()];
    var currentDay = date.getDate();
    var currentMonth = months[date.getMonth()];
    var currentYear = date.getFullYear();

    var dateDisplay = $('<h6 id="eva-chatbox-date-display">'
      + currentWeekDay + ', ' + currentDay + ' de '
      + currentMonth + ' de ' + currentYear + '</h6>');
    return dateDisplay;
  }

//monta video
  var BuildVideoLoading = function () {

  var source0 = $('<source>').attr({'src': origin_url + '/assets/video/02_VIVI_REPOUSO_NEW.mp4','type': 'video/mp4'});
  var video0 = $('<video>').attr({'id': 'video0','loop': 'true'}).addClass('video');
  video0.append(source0);

  var source1 = $('<source>').attr({'src': origin_url + '/assets/video/01_VIVI_APRESENTACAO_NEW.mp4','type': 'video/mp4'});
  var video1 = $('<video>').attr({'id': 'video1','style': 'display:none;'}).addClass('video');
  video1.append(source1);

  var source2 = $('<source>').attr({'src': origin_url + '/assets/video/07_VIVO_RESPOSTA_POSITIVA_3_NEW.mp4','type': 'video/mp4'});
  var video2 = $('<video>').attr({'id': 'video2','style': 'display:none;'}).addClass('video');
  video2.append(source2);

  var source3 = $('<source>').attr({'src': origin_url + '/assets/video/06_VIVO_ENCERRAMENTO_OBRIGADO_NEW.mp4','type': 'video/mp4'});
  var video3 = $('<video>').attr({'id': 'video3','style': 'display:none;'}).addClass('video');
  video3.append(source3);

  var html = video0.append(video1).append(video2).append(video3);

  return html;

  }

//monta o body
  var BuildChatBody = function () {
    var list = $('<ul>').attr({ 'id': 'eva-messages-list' })
      .addClass('eva-messages-list');
    var inner = $('<div>').addClass('inner')
      .append(list);
    var html = $('<div>').addClass('eva-chatbox-body')
      .attr({ 'id': 'eva-chatbox-body-messages' })
      .append(inner);
    return html;
  }

//monta o footer
  var BuildChatFooter = function () {
    var input = $('<input>').attr({
      'type': 'text',
      'id': 'msg_to_send',
      'name': 'footer',
      'autocomplete': 'off',
      'placeholder': 'Mensagem...'
    });
    var send = $('<img/>').attr({'id': 'send-msg','src': origin_url + '/assets/icons/btn-Send.svg', 'alt': 'send-msg','title': 'enviar mensagem'
    })
      .addClass('eva-chatbox-sendbtn')
      .click(sendMessage);
    var form = $('<form>').addClass('inner')
      .append(input)
      .append(send)
      .submit(sendMessage);
    var html = $('<div>').addClass('eva-chatbox-footer')
      .append(form);
    return html;
  }

//monta o chat com os elementos
  var BuildChat = function () {
    var html = $('<div>')
      .addClass('eva-chatbox')
      .append(BuildVideoLoading())
      .append(BuildChatBody())
      .append(BuildChatFooter());
    var position = $('#eva-chat').attr('position');
    if (position) {
      html.attr({ 'position': position })
    }
    return html;
  };

  function answerHasBtnOptions(answer) {
    if (answer['options'] && answer.options.length > 0) {
      return true;
    }
    return false;
  }

  var BuildMsgBotButtons = function (answer, session, context) {
    var html = '';
    var technicalText = (answer['technicalText'] ? answer['technicalText'] : {});
    technicalText = jQuery.type(technicalText) === 'string' ? JSON.parse(technicalText) : technicalText;
    var sessionCode = (session ? session : '');
    if (answerHasBtnOptions(answer)) {
      html = $('<ul>').addClass('eva-msg-list').addClass('eva-msg-buttons');
    }
    
    if (answerHasBtnOptions(answer)) {
      for (var i = 0; i < answer.options.length; i++) {
        var btn = answer.options[i];
        var button = '';
        if (isLink(btn['text'])) {
          button = $('<a>')
            .attr({ 'href': btn['text'], 'target': '_blank' });
        } else {
          button = $('<button>')
            .click({ btn: btn, context: context, sessionCode: sessionCode, technical: technicalText }, sendButtonMessage);
        }
        button.addClass('eva-btn').append(btn['title']);
        var wrap = $('<li>').append(button);
        html.append(wrap);
      }
    }
    return html;
  }

  var getAskedMsg = function (id) {
    var msg = globalDialogue[id - 1];
    return (msg ? msg['text'] : '');
  }

  
  var pushMessageBot = (function () {
    "use strict"
    function pushMessageBot(dialogue_list, msg_obj) {
      for (var i = 0; i < msg_obj.answers.length; i++) {
        var ans = msg_obj.answers[i]; //Cada resposta ele coloca na variável ans
        var context = msg_obj['context'];
        var id = globalDialogue.length;
        var wrap = $('<div>').addClass('eva-msg-wrap-bot');
        var msg = $('<p>').append(ans['text']);
        var btns = BuildMsgBotButtons(ans, msg_obj['sessionCode'], msg_obj['context']);
        var technicalTt = (ans['technicalText'] ? ans.technicalText : '{}');
        if (context) {
          wrap.append(msg)
            .append(btns);
        } else {
          wrap.append(msg)
            .append(btns);
        }
        var icon = $('<img/>').addClass('eva-msg-icon')
          .attr({ 'src': origin_url + '/assets/icons/eVa_avatar.png' });
        var content = $('<div>')
          .attr({ 'id': 'eva-msg-bot-' + id })
          .append(icon)
          .append(wrap);
        var dialogue = $('<li>').append(content);
        dialogue_list.append(dialogue);
      }
    }
    return pushMessageBot;
  })();

  
  var BuildMsgClient = function (obj) {
    var msg = $('<p>').append(obj.text);
    var inner = $('<div>').addClass('eva-msg-wrap-client').append(msg);
    var html = $('<li>').append(inner);
    return html;
  }
  
  function isBotMsg(obj) {
    if (obj['answers']) {
      return true;
    }
    return false;
  }

  function isNotLoading(obj) {
    if (obj && obj['technicalText'] != 'loading') {
      return true;
    }
    return false;
  }

  var pushNewMessage = (function () {
    "use strict";
    function pushNewMessage(obj) {
      var messagesList = $('#eva-messages-list'); //FL conversa do chat
      
      
      if (isBotMsg(obj)) { //mensagem do bot (vinda do broker)
             pushMessageBot(messagesList, obj);
        } else { //mensagem de cliente (digitada pelo usuário)
        messagesList.append(BuildMsgClient(obj));
      }
      if (isNotLoading(obj)) { globalDialogue.push(obj); }
      scrollBottom();
    }
    return pushNewMessage;
  })();


 
  var afterMsgSent = (function () {
    "use strict";
    function afterMsgSent(code) {
      disableTyping();
      $('#msg_to_send').prop('disabled', false);
      sendInputAble = true;
      $('#msg_to_send').focus();    
    }
    return afterMsgSent;
  })();

  var scrollBottom = (function () {
    "use strict";
    function scrollBottom() {
      var height = $('.eva-chatbox-body .inner').height();
      $('.eva-chatbox-body').animate({ scrollTop: height }, 'slow');
    }
    return scrollBottom;
  })();

  var disableTyping = (function () {
    "use strict";
    function disableTyping() {
      $('#chatTypingGif').closest('li').remove();
    }
    return disableTyping;
  })();

  var sendMsgToBrokerWithSessionCode = (function () {
    "use strict";
    function sendMsgToBrokerWithSessionCode(message, push) {
      if (push) {
        pushNewMessage(message);
        sentmessage.play(); //audio do chat
      }
      sendMsgToBroker(getSessionCode(), getLastSessionCode(), message);
    };
    return sendMsgToBrokerWithSessionCode;
  })();

//script que remove html da resposta
  function stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

//faz requisicao para o broker
  var sendMsgToBroker = (function () {
    "use strict";

    function sendMsgToBroker(sessionCode, lastSessionCode, message) {
      if (sendInputAble) {

        $('#msg_to_send').prop('disabled', true);
        sendInputAble = false;

        pushNewMessage(global_gifjson); 
        var endpoint = broker_endpoint + sessionCode;
        $.ajaxSetup({
          headers: broker_headers
        });
        
        $.ajax({
          url: endpoint,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: JSON.stringify(message),
          success: function (resp) {
            if (resp) {

              var msgT = stripHtml(resp.answers[0].text);
              var player =  new talkify.Html5Player();
              //var player = new talkify.TtsPlayer(); //utilizar esse para vozes do talkfy
              player.playText(msgT);

              pushNewMessage(resp);
              receivemessage.play(); 

              setLastSessionCode(getSessionCode());
              setSessionCode(resp['sessionCode']);
            } else {
              console.log('Ocorreu um erro.');
              pushNewMessage(global_errorMsg);
            }
            afterMsgSent(message['code']);
          },
          error: function (err) {
            console.log(err);
            pushNewMessage(global_errorMsg);
            afterMsgSent(message['code']);
          }
        });

      }
    };

    return sendMsgToBroker;
  })();

  var isLink = function (string) {
    return (string.substring(0, 4) == 'http');
  }

  var isPhone = function(string) {
    
    var lastCharacters = string.substring(string.indexOf('-') + 1, string.length);
    var tudoIgual = function iSAllCharsEqual(string, valorX) {
        for (i = 0; i < string.length; i++) {
            if ((string.substr(i, 1) != valorX)) {
                return false;
            }
        }
        return true;
    }
    if (tudoIgual) {
        if (!isNaN(lastCharacters)) {
            return true;
        }
    }
}

  var sendButtonMessage = (function () {
    "use strict";
    function sendButtonMessage(event) {
      var technicalText = jQuery.type(event.data.technical) === 'string' ? JSON.parse(event.data.technical) : event.data.technical;
      var btn = event.data.btn;
      var text = isLink(btn['text']) ? '' : btn['text'];
      var sessionCode = event.data.sessionCode;
      var context = event.data.context;
      var title = isLink(btn['title']) ? '' : btn['title'];
      var isTelephone = isPhone(title);
      var message = {
        'text': '',
        'context': context
      };
      if (isTelephone) {
        if (technicalText['ChatBot_ButtonReturnField']) { //comportamento específico de botão
            context[technicalText.ChatBot_ButtonReturnField] = text;
            message.context = context;
        } else { //comportamento padrão do botão
            message.text = text;
        }
    } else {
        message.context = context;
        message.text = text
    }
      sendMsgToBroker(sessionCode, sessionCode, message);
    }
    return sendButtonMessage;
  })();

  var getLastContext = function () {
    var lastMsg = globalDialogue[globalDialogue.length - 1];
    var lastcontext = {};
    if (lastMsg && lastMsg['context']) {
      lastcontext = lastMsg['context'];
    }
    return lastcontext;
  }


  var sendMessage = (function () {
    "use strict";
    function sendMessage(msgToSend) {
      var input = $('#msg_to_send'); //monitora evento no submit do usuario
      var message = {
        'text': (typeof (msgToSend) == 'string' ? msgToSend : input.val()),
        'context': getLastContext()
      };

        if(input.val().trim() != '') {
        	sendMsgToBrokerWithSessionCode(message, true);
        	input.val('');
      }
      //}
    }
    return sendMessage;
  })();

   function video(video) {
    videoFim = 0;

    $('#video0').css('display', 'block').attr('loop', true);

    if (muted == true) {
      $('.video').css('display', 'none').attr('muted', true);
      video.css('display', 'block').attr('muted', true).get(0).play();
    } else {
      $('.video').css('display', 'none').attr('muted', true);
      video.css('display', 'block').attr('muted', true).get(0).play();
    }
     $('.video').css('display', 'none').attr('muted', true);
     video.css('display', 'block').attr('muted', false).get(0).play();

    video.bind('ended', function (e) {
      $('.video').css('display', 'none');
      $(this).attr('muted', true);
      $('#video0').attr('loop', true).css('display', 'block').get(0).play();
      videoFim = 1
    });
  }


  var buildHtmlChat = (function () {
    'use strict'
    function buildHtmlChat() {
      if (createChat) {
        createChat = false;
        $('#eva-chat').append(BuildChat());
        //Envia mensagem inicial caso queira
        sendMsgToBroker('', '', { 'text': 'oi', 'context': {} });
        $('form').submit(function (event) {
          event.preventDefault(); //prevent from reloading
        });
      }
      $('.eva-chatbox').addClass('eva-chatbox-visible');
    }
    return buildHtmlChat;
  })();

  // constroi o html do chat
  $('#eva-chat').append(buildHtmlChat());

  $('#video0').attr('loop', true).get(0).play();
  if (apresentacao == 0) {
      video($('#video1'));
    }

};

//verifica se ja ha jquery na pagina caso nao haja faz o import
(function () {
  if (typeof jQuery == 'undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jQueryTag = document.createElement('script');
    jQueryTag.type = 'text/javascript';
    jQueryTag.src = origin_url + '/node_modules/jquery/dist/jquery.js';
    jQueryTag.onload = chatJQueryCode;
    headTag.appendChild(jQueryTag);
  } else {
    chatJQueryCode();
  }
})();

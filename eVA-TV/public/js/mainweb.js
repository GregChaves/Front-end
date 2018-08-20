
$(function () {
  var session = 0;
  var fim = 0;
  var apresentacao = 0;
  var fecharvivi = 0;
  var videoFim = 0;
  var vivi = 0;
  var widgettop = "";
  var chattop = "";
  var numwidget = "";
  var widget = false;
  var pesquisa = "";
  var codSend = "";
  var parser = new UAParser();
  var reproduzAudio = false;
  var mapActive = true;
  var origemRota = "";
  var mudo = 1;
  var destinoRota = "";
  var jsonSatisfacao = "";
  var comentario = "";
  var evaluation;
  var answerSatis;
  var mapSlide = false;
  var texto = "";
  var context_Returned = "";
  var satisfation_context_returned = "";
  var recording = false; // "https://assistentevirtual.mybluemix.net/api/conversations/"+ context_Returned 
  var i = 0;
  //var context = new AudioContext();// http://pruebaeveris.mybluemix.net/api/conversations
  //Ajax
  var ajaxURL = "https://eva-broker.mybluemix.net/api/conversations/" + context_Returned;//"http://localhost:51480/api/mapfre/conversation"; "http://netcorecontroler.mybluemix.net/api/mapfre/conversation"
  var ajaxType = "POST";
  var ajaxResponseParseMethod = "json";
  var ajaxCrossDomain = true;
  var muted = false;

  talkify.config.remoteService.host = 'https://talkify.net';
  talkify.config.remoteService.apiKey = '850ba188-9681-4302-a99e-14445dd942b9';
  talkify.config.remoteService.active = false;

  talkify.config.ui.audioControls = {
    enabled: false, //<-- Disable to get the browser built in audio controls
    container: document.getElementById("player-and-voices")
  };

  var headersAjax = {
    'Accept': 'application/json',
    'Content-type': 'application/json',
    'PROJECT': 'B2C',
    'CHANNEL': 'Web',
    'API-KEY': '56448193-695a-40b4-9ffc-28891a758034',
    'OS': parser.getOS().name,
    'OS-VERSION': parser.getOS().version,
    'BROWSER': parser.getBrowser().name,
    'BROWSER-VERSION': parser.getBrowser().version,
    'LOCALE': 'pt-BR',
    'USER-REF': "127.0.0.1",
    'BUSINESS-KEY': ""
  };

  window.esconderWidgetVivi = function () {
    $('#web').attr('class', 'assistent-disabled');
    widget = false;
  };

  window.mostrarWidgetVivi = function (numwidget) {
    widgettop = numwidget;
    widget = true;
    $('#web').css('top', "" + numwidget + "px").css('display', 'block');

  };

  window.esconderChatVivi = function (top, right) {
    chattop = top;
    $('#poupchat').css('top', "" + top + "px").css('right', "" + right + "px").css('display', 'none');

  };

  window.mostrarChatVivi = function (numchat, numchatright) {

    chattop = numchat

    $('#poupchat').css('top', "" + numchat + "px").css('right', "" + numchatright + "px").css('display', 'block');

  };

  $('#video0').attr('loop', true).get(0).play();

  $(".scroll-everis").scroll();

  //jQuery('#poupchat').css('top', '38px');




  // $('#poupchat').draggable({ containment: "body",});//, cancel: "div"});
 // $('.top-chat').drag(function (ev, dd) {
    // console.log($(window).scrollTop(), ev);
 //   $('#poupchat').css({
  //    top: ev.offsetY - $(window).scrollTop(),
  //    left: ev.offsetX
  //  });



//  });

 // console.log($('#poupchat').height())

 // $('.move-vivi').drag(function (ev, dd) {
    // console.log($(window).scrollTop(), ev);
 //   $('#poupchat').css({
  //    top: ev.offsetY - $(window).scrollTop() - $('#poupchat').height() + 35,
  //    left: ev.offsetX - 30
  //  })
 // });


  function sizeOfThings() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var top

    //document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
    //$('#poupchat').css('top','8px').css('right','30px');

  };
  sizeOfThings();

  window.addEventListener('resize', function () {
    sizeOfThings();
  });



  $(window).scroll(function () {
    set = $(document).scrollTop() + widgettop;

    //jQuery('.assistent').animate(
    //  {top: set +"px"},
    //{duration:0, queue:false}
    //);

    //bas = $(document).scrollTop() + chattop;

    // jQuery('#poupchat').animate(
    //   {top: bas +"px"},
    // {duration:0, queue:false}
    // );

    //sat = $(document).scrollTop() + 70;

    // jQuery('.satisfacao').animate(
    //   {top: sat +"px"},
    // {duration:0, queue:false}
    //);
  });



  $('#inicio').click(function () {
    // var tel = $('.input-everis').val();

    $('.input-everis').replaceWith(function () {
      return '<span class=' + this.className + '>' + this.value + '</span>'
    })

    $('.input-everis').text(function (i, tel) {

      tel = tel.replace(/\D/g, '');
      tel = tel.replace(/(\d{2})(\d{9})/, "$1$2");
      tel = tel.replace(/(\d{2})(\d{8})/, "$1$2");

      var l = tel.length;
      if (l == 11 || l == 10) {
        return tel;
      }
      if (l != 10 || l != 11) {
        tel = '';
        return tel;
      }

    });


    var tel = $('.input-everis').text();

    if (apresentacao == 0) {
      video($('#video1'));
    }

    $('#tel').css('display', 'none');
    // $('#texto').focus();
    $('#chat').css('display', 'inline-block');
    vivi = 1;



    // $('#video0').css('display','none');
    // $('#video1').css('display','inline-block').get(0).play();
    //$('#video0').on('ended', function (e) {
    //   $('.video').css('display','none');
    //   $('#video').css('display','inline-block').get(0).play();
    // });

    headersAjax = {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'PROJECT': 'B2C',
      'CHANNEL': 'Web',
      'API-KEY': '56448193-695a-40b4-9ffc-28891a758034',
      'OS': parser.getOS().name,
      'OS-VERSION': parser.getOS().version,
      'BROWSER': parser.getBrowser().name,
      'BROWSER-VERSION': parser.getBrowser().version,
      'LOCALE': 'pt-BR',
      'USER-REF': "127.0.0.1",
      'BUSINESS-KEY': tel
    };


  });

  // $('').keypress(function (event) {
  //     if (event.which == 13) {
  //       $("#enviar").click();


  //  }

  //});

  function videoEnded() {
    alert('dsdsadas');
  }
  function video(video) {
    videoFim = 0;


    $('#video0').css('display', 'block').attr('loop', true);

    if (muted == true) {
      $('.video').css('display', 'none').attr('muted', false);
      video.css('display', 'block').attr('muted', true).get(0).play();
    } else {
      $('.video').css('display', 'none').attr('muted', true);
      video.css('display', 'block').attr('muted', false).get(0).play();
    }
    // $('.video').css('display', 'none').attr('muted', true);
    // video.css('display', 'block').attr('muted', false).get(0).play();


    video.bind('ended', function (e) {
      $('.video').css('display', 'none');
      $(this).attr('muted', true);
      $('#video0').attr('loop', true).css('display', 'block').get(0).play();
      videoFim = 1
    });
  }

  function scrollToDown() {

    $('.scroll-everis').scrollTop($('.scroll-everis')[0].scrollHeight);
  }

  $("#enviar").click(function () {

    var text = $('#texto').val();

    if ($('#texto').val() != "") {
      $(".scroll-everis").append("<div class='chat-message row'><p class='texto-vivi'><a class='icon-user'></a> <span class='texto-user'>Você</span></p> <span class='resposta-user'>" + text + "</span> </div>");
      // atualizar scroll para baixo
      scrollToDown();
      //Enviar para Watson
      $("#texto").css('background', 'rgba(128,128,128,0.1)');
      $("#texto").attr('placeholder', 'Por favor Aguarde ...');
      $("#texto").attr('disabled', 'disabled');
      $("#enviar").attr('disabled', 'disabled');

      sendMensagemWatson(text);
    }
    //limpar        
    $('#texto').val('');

  });

  $('#texto').keypress(function (event) {
    if (event.which == 13) {
      $("#enviar").click();
    }
  });

  $('.input-everis').keypress(function (event) {
    if (vivi == 0) {
      if (event.which == 13) {
        $(".button-everis").click();


      }
    }
  });



  function sendMensagemWatson(usermessage) {

    /* Define estrutura da mensagem para ser enviada via JSON ao servidor */

    var response_Returned = "";
    var dialogStack_Returned = "";
    var dialog_turn_counter_Returned = 0;
    var dialog_request_counter_Returned = 0;

    //  if ($('.scroll-everis').data('context') != null) {
    ////     context_Returned = JSON.stringify($('.scroll-everis').data('context'));
    //}

    ajaxURL = "https://eva-broker.mybluemix.net/api/conversations/" + context_Returned;

    var message = {
      text: usermessage,
      returnAudio: false
    };
    if (codSend)
      message.code = codSend;


    /* Define AJAX Settings */
    jQuery.support.cors = true;
    var ajaxDataToTarget = message;


    console.log(message);

    /* Define AJAX Settings */
    jQuery.support.cors = true;
    var ajaxDataToTarget = message;

    jQuery.ajax({

      headers: headersAjax,
      type: ajaxType,
      url: ajaxURL,
      crossDomain: ajaxCrossDomain,
      data: JSON.stringify(ajaxDataToTarget),
      dataType: ajaxResponseParseMethod,
      success: function (data) {
        //console.log(data.sessionCode);
        try {
          if (data.sessionCode)

            context_Returned = data.sessionCode;
        } catch (err) {


        }
        console.log(data);
        answerAssistant(data);

        // if (data.output.mapa.activeMap == true){
        //   Mapa(data.output.mapa.origem, data.output.mapa.destino);
        //    $('#texto').html("<div class='chat-message row'><div class='message-logo col-xs-1 col-md-4 col-sm-2'><img class='img-logo' src='img/logoChat.png'></div><div class='message col-xs-12 col-sm-10 col-md-8'><span> " + data.output.mapa.origem + " " + data.output.mapa.destino + " </span></div></div>");
        //  }

        //Gravar ID da conversa
        // context_Returned = data.sessionCode;
      },						        /* true - will cache URL data returned; false - will not cache URL data but only for HEAD AND GET requests */
      error: function (data) {
        answerAssistantError();
        console.log(data);
      }
    })

    console.log(ajaxURL);
  }

  function answerAssistantError() {

    $(".scroll-everis").append("<div><p class='texto-vivi'><a class='informacao'></a> <span class='texto-watson'>Vivi</span></p><span class='resposta-vivi'>Falha na comunicação... Tente novamente</span>  </div>");

    scrollToDown();


    $("#texto").removeAttr('disabled');
    $("#enviar").removeAttr('disabled');
  }

  /**
 * Returns the text from a HTML string
 * 
 * @param {html} String The html string
 */
function stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

  function answerAssistant(texto) {

    try {

    //  var audio = new Audio();
      var msgT = stripHtml(texto.answers[0].text);
	  
	  
    //var player =  new talkify.TtsPlayer();
    
    //var player =  new talkify.Html5Player().forceLanguage('portuguese');
    //player.playText(msgT);
	  
      var html = "<lu style='list-style-type: none;'>";
      if (texto.answers[0].options.length != undefined) {
        for (var i = 0; i < texto.answers[0].options.length; i++) {

          html += "<li class='margin-top5px'><a href='javascript:void(0)' id='lis-poup' data-id='" + i + "'  data-text='" + texto.answers[0].options[i].text + "'>" + texto.answers[0].options[i].title + "</a></li>";


        }

        $(".scroll-everis").append("<div class='chat-message row' tabindex='0'><p class='texto-vivi'><a class='informacao'></a> <span class='texto-watson'>Vivi</span></p><span tabindex='0' class='resposta-vivi'>Veja a(s) resposta(s) que eu encontrei, escolha aquela que é melhor para o que você precisa ? " + html + "</lu></span></div>");
      }
      $('.scroll-everis div:last span').focus();
      scrollToDown();
    } catch (err) {
      $(".scroll-everis").append("<div class='chat-message row' tabindex='0' ><p class='texto-vivi'><a class='informacao'></a> <span class='texto-watson'>Vivi</span></p><span tabindex='0' class='resposta-vivi'>" + texto.answers[0].text + "</span>  </div>");

      $('.scroll-everis div:last span').focus();
      scrollToDown();
    }

    $("#texto").attr('placeholder', 'Escreva uma mensagem')
      .css('background', 'white').removeAttr('disabled').focus();

    $("#enviar").removeAttr('disabled');


  }

  $("#poupchat").mouseup(function () {

    var left = $(this).css('left');

    left = left.replace('px', '0');

    if (left < 175) {
     // $('.poup-intent').css('margin-left', '338px');
      $('#seta').addClass('seta-vivi');
    } else {
    //  $('.poup-intent').css('margin-left', '-362px');
      $('#seta').removeClass('seta-vivi');
      $('#seta').css('display', 'block');
    }

  });

  $(".scroll-everis").delegate("#lis-poup", "click", function () {


    var title = $(this).data('title');

    var top = +  327 + $(this).offset().top;
    var id = $(this).data('id');

    if (id == 1) {
      top = "180"
    } else if (id == 2) {
      top = "209"
    } else { /*top = "158"*/ }

    $('.poup-intent').css('display', 'block').css('top', top + 'px');//scroll-poup
    console.log("left: " + $(this).offset().left + 'altura: ' + $('.scroll-poup').height());
    console.log(450 - $('.scroll-poup').height());

    $('.scroll-poup').html($(this).data('text'));

    $(".icon-x").click(function () {
      $('.poup-intent').css('display', 'none');
    });

    $('.poup-intent').attr('tabindex', 0);
    $('.poup-intent ').focus();


    //$('.scroll-everis div:last span').focus();

    //  $('#poupchat').draggable({ axis: "x", cancel: "div.poup-intent"});
  });

  function FecharVivi(x) {
    if (x == 1) {

      $('#video0').css('display', 'none').attr('loop', false);

      if (muted == true) {
        $('.video').css('display', 'none').attr('muted', false);
        $('#video4').css('display', 'block').attr('muted', true).get(0).play();
      } else {
        $('.video').css('display', 'none').attr('muted', true);
        $('#video4').css('display', 'block').attr('muted', false).get(0).play();
      }

      // $('.video').css('display', 'none').attr('muted', true);
      // $('#video4').css('display', 'block').attr('muted', false).get(0).play();

      $('#video4').bind('ended', function (e) {
        if (widget == false && context_Returned != '' && satisfation_context_returned != context_Returned) {
          esconderWidgetVivi();
        } else {
          $('#web').attr('class', 'assistent');
          $('.assistent').css('display', 'block').css('opacity', '1');
        }
        $('#poupchat').css('display', 'none');
        if (satisfation_context_returned != context_Returned) {
          $('.satisfacao').css('display', 'block').animate({ top: '80px', left: "20%" });
          satisfation_context_returned = context_Returned;
        }
        fecharvivi = 0;
        video($('#video0'));
        // $("#video4").get(0).currentTime = 0;
        $('.video').css('display', 'none');
        $(this).attr('muted', true);
        $('#video0').attr('loop', true).css('display', 'inline-block').get(0).play();
      });

    } else {
      if (widget == false && context_Returned != '' && satisfation_context_returned != context_Returned) {
        esconderWidgetVivi();
      } else {
        $('#web').attr('class', 'assistent');
        $('.assistent').css('display', 'block').css('opacity', '1');
      }
      $('#poupchat').css('display', 'none');
      if (satisfation_context_returned != context_Returned) {
        $('.satisfacao').css('display', 'block').animate({ top: '80px', left: "20%" });
        satisfation_context_returned = context_Returned;
      }
      video($('#video0'));

    }


  }

  $('.top-seta-1').click(function () {

    if (fecharvivi == 0 && fim == 0) {
      fim = 1;
      fecharvivi = 1;
      apresentacao = 1;
      FecharVivi(1);

    } else { FecharVivi(2); }

  });

  $('.top-seta').click(function () {
    $('#poupchat').css('display', 'none');
    $('.assistent').animate({ opacity: '1' }, 280).css('display', 'block');


  });

  $('.assistent').click(function () {
    $(this).animate({ opacity: '0' }, 280).css('opacity', '0');
    $('#poupchat').css('display', 'block');
    $('.input-everis').mask('(99) 9999-99999');
    $('#video0').attr('loop', true).get(0).play();
    $('#tel').focus();
  });

  // fechar satisfação
  $('.icon-satis').click(function () {
    $('.satisfacao').css('display', 'none').css('top', '0px');
    $('#satisfacao').css('display', 'block');
    $('#feedback-satisfacao').css('display', 'none');

    console.log('context: ' + context_Returned);

    if (widget == true) {
      $('.assistent').css('display', 'none').css('opacity', '1');
    } else {
      $('#web').attr('class', 'assistent');
      $('.assistent').animate({ opacity: '1' }, 280).css('display', 'block');
    }

  });

  // fechar satisfação
  $('.icon-chat-0').click(function () {

    if (muted == false) {
      $('video').attr('muted', true);
      $('.top-seta-0').css('background-image', 'url(https://vivo-b2c.mybluemix.net/img/off.png)')
      muted = true;
    } else {
      $('.video').attr('muted', false);
      $('.top-seta-0').css('background-image', 'url(https://vivo-b2c.mybluemix.net/img/min-icon-0.png)')
      muted = false;
    }

  });

  // passo seguinte da satisfação
  //  $('#button-satisfacao').click(function(){

  //$('#feedback-satisfacao').css('display','block');
  //   $('#satisfacao').css('display','none');


  //  }); 
  $('#button-satisfacao-atras').click(function () {

    $('#feedback-satisfacao').css('display', 'none');
    $('#satisfacao').css('display', 'block');


  });

  $('.top-seta-0').click(function () {

    if (mudo == 1) {
      $('.video').attr("muted", true);
      mudo = 2;
      $(this).css('background-image', 'url(../img/off.png)');
    } else {
      $('.video').attr('muted', false);
      mudo = 1;
      $(this).css('background-image', 'url(../img/min-icon-0.png)');
    }


  });

  $('#satisfacao').delegate(".button-satisfacao", "click", function () {

    console.log($("input[name='satisf']:checked").val());
    console.log($("input[name='seguin']:checked").val());

    if ($("input[name='seguin']:checked").val() == "NAO") {


      $('#feedback-satisfacao').css('display', 'block');
      $('#satisfacao').css('display', 'none');
      $('.assistent').animate({ opacity: '1' }, 280).css('display', 'block');
      evaluation = $('input[name="satisf"]:checked').val();
      answerSatis = false;


    } else {

      jsonSatisfacao = {
        evaluation: $('input[name="satisf"]:checked').val(),
        answered: true,
        userComments: ""
      };

      PesquisaSatisfacao(jsonSatisfacao);

      $('#satisfacao').html('Obrigado !')
        .css('font-size', '22px')
        .css('color', 'black')
        .css('height', '230px')
        .css('padding', '32px');
    }

  });

  $('#feedback-satisfacao').delegate("#button-satisfacao-enviar", "click", function () {

    jsonSatisfacao = {
      evaluation: evaluation,
      answered: answerSatis,
      userComments: $('.texto-area-satisfacao').val()
    };


    PesquisaSatisfacao(jsonSatisfacao);
    $('.satisfacao').css('display', 'none');
    $('.texto-area-satisfacao').val(" ");
    $('#web').attr('class', 'assistent');
    $('.assistent').css('display', 'block').css('opacity', '1');

  });

  function PesquisaSatisfacao(pesquisa) {


    jQuery.ajax({

      headers: headersAjax,
      type: ajaxType,
      url: ajaxURL + "/satisfactions",
      crossDomain: ajaxCrossDomain,
      data: JSON.stringify(pesquisa),
      dataType: ajaxResponseParseMethod,
      success: function (data) {
        console.log(data);

        // answerAssistant(data);
        // if (data.output.mapa.activeMap == true){
        //   Mapa(data.output.mapa.origem, data.output.mapa.destino);
        //    $('#texto').html("<div class='chat-message row'><div class='message-logo col-xs-1 col-md-4 col-sm-2'><img class='img-logo' src='img/logoChat.png'></div><div class='message col-xs-12 col-sm-10 col-md-8'><span> " + data.output.mapa.origem + " " + data.output.mapa.destino + " </span></div></div>");
        //  }

        //Gravar ID da conversa
        context_Returned = data.sessionCode;
      },						        /* true - will cache URL data returned; false - will not cache URL data but only for HEAD AND GET requests */
      error: function (data) {
        //  answerAssistantError();
        console.log(data);
      }
    })


  }

  $('#chat').click(function () {
    // $('#texto').focus();
  });

  function getQParam(param) {
    var url = window.location.search.substring(1);
    var params = url.split('&');

    for (i in params) {
      var value = params[i].split('=');
      if (param == value[0]) {
        return value[1];
      }
    }
  }

  //parametro Question-B2C-Web Desktop
  if (getQParam('question')) {
    //click banner Vivi
    $('.assistent').click();
    //ocultar area de telefone.
    $('#tel').css('display', 'none');
    //define foco ao campo de texto.
    $('#texto').focus();
    //exibir area de chat.
    $('#chat').css('display', 'inline-block');
    //envio de parametro da URL.
    var question = getQParam('question');
    //tratar espacos via decode.
    question = decodeURI(question);
    $('#texto').val(question);
    //click para envio da question.
    $('#enviar').click();
  }
  //console.log(window.location.href + ' main');
});


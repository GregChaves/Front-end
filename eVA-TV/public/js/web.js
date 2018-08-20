(function(){
      var div = document.createElement('div');
      // div.innerHTML = "<link href='https://vivo-b2c.mybluemix.net/css/main.css' rel='stylesheet'/><link rel='stylesheet' type='text/css' href='https://vivo-b2c.mybluemix.net/css/font-awesome.min.css'><script src='https://code.jquery.com/jquery-1.12.4.js'></script><script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js'></script></script><script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDLFphJvAnHema1Tjx1XSHY8UCnCDBxjRE'></script><script src='https://vivo-b2c.mybluemix.net/js/jquery-move.js'></script><script src='https://vivo-b2c.mybluemix.net/js/jquery-mask.js'></script><script src='https://vivo-b2c.mybluemix.net/js/ua-parse.js'></script> <section id='poupchat'> <div class='top-chat row'> <img class='img-vivo-chat col-md-4' src='https://vivo-b2c.mybluemix.net/img/vivologo1.png'> <img class='img-vivo-direcao col-md-4' src='https://vivo-b2c.mybluemix.net/img/draggable.png'> <a href='#' class='icon-chat-0'> <div class='col-md-1 top-seta-0'></div> </a> <a href='#' class='icon-chat-1'> <div class='col-md-1 top-seta'></div> </a> <a href='#' class='icon-chat-2'> <div class='col-md-1 top-seta-1'></div> </a> </div> <div class='poupchat-vivo'> <video id='video0' class='video' loop='true'> <source src='https://vivo-b2c.mybluemix.net/video/02_VIVI_REPOUSO_NEW.mp4' type='video/mp4'> </video> <video id='video1' class='video' style='display: none;'> <source src='https://vivo-b2c.mybluemix.net/video/01_VIVI_APRESENTACAO_NEW.mp4' type='video/mp4'> </video> <video id='video3' class='video' style='display: none;'> <source src='https://vivo-b2c.mybluemix.net/video/07_VIVO_RESPOSTA_POSITIVA_3_NEW.mp4' type='video/mp4'> </video> <div id='tel'> <span><p class='p-eva-vivi'><a class='informacao'></a> Olá, eu sou a Vivi, a Assistente Virtual da Vivo.<p class='p-eva-vivi'> <p class='p-eva-vivi'> Estou aqui para ajudá-lo com suas dúvidas. Basta escrever uma pergunta, que eu ofereço algumas opções de resposta. Depois, É só clicar em uma das opções que aparecem e seguir as orientações.</p> <p class='p-eva-vivi'>Vamos começar?<p class='p-eva-vivi'> <p class='p-eva-vivi'>Se preferir, informe seu não mero de telefone com DDD ou clique em iniciar</p>.</span> <input type='text' class='input-everis' placeholder='Escreva seu DDD + telefone'> <input type='button' id='inicio' class='button-everis' value='Iniciar'> </div> <div id='chat' style='display:none'> <div class='scroll-everis'> <div><p class='texto-vivi'><a class='informacao'></a> <span class='texto-watson'>Vivi</span></p> <span class='resposta-vivi'>Qual é a sua dúvida ?</span> </div> </div> <input type='text' id='texto' placeholder='Escreva sua pergunta'> <input type='button' id='enviar' class='button-everis' value='Enviar'> </div> <div class='row' style='width: 100%;height: 33px;'> <div class='icon-move-dow col-md-8'></div> <div class='font-everis'> <span>Powered by</span><a href='http://www.everis.com/' style='text-decoration: none;color: #6e2494;'> Everis </a></div> </div> </div> <div class='poup-intent' style='display: none'> <span class='icon-x'><div class='xix'></div></span> <div class='scroll-poup' draggable='false'> </div> <div id='seta' class='seta-poup'></div> </div> <script type='text/javascript' src='https://l2.io/ip.js?var=userip'></script> </section> <a href='javascript:void(0)' class='assistent' style='display:none'></a> <section class='satisfacao' style='display:none'> <div class='titulo-satisfacao'> <span class='titulo-texto'>Pesquisa de Satisfação</span><span class='icon-satis'><div class='satisx' aria-hidden='true'></div></span> </div> <div id='satisfacao'> <div class='pergunta-satisfacao'> <span class='titulo-texto'>Como você avalia o atendimento da Vivi ?</span> <div class='resposta-satisfacao'> <input type='radio' name='satisf' value='4' class='resposta-satisfacao-input' checked> <span class='font-satisfacao-check'>Muito Bom</span> <input type='radio' name='satisf' value='3' class='resposta-satisfacao-input'> <span class='font-satisfacao-check'>Bom</span> <input type='radio' name='satisf' value='2' class='resposta-satisfacao-input'><span class='font-satisfacao-check' style='margin-left: 9px;'>Regular</span> <input type='radio' name='satisf' value='1' class='resposta-satisfacao-input'> <span class='font-satisfacao-check'>Ruim</span> </div> </div> <div class='pergunta-satisfacao'> <span class='titulo-texto'>Suas dúvidas foram solucionadas ?</span> <div class='resposta-satisfacao'> <input type='radio' name='seguin' value='SIM' class='resposta-satisfacao-input' checked> <span class='font-satisfacao-check'>Sim</span> <input type='radio' name='seguin' value='NAO' class='resposta-satisfacao-input'> <span class='font-satisfacao-check'>Não</span> </div> </div> <input type='button' id='button-satisfacao' class='button-satisfacao' value='Seguinte'> </div> <div id='feedback-satisfacao' style='display:none'> <div class='pergunta-satisfacao'> Caso você não tenha gostado do atendimento, deixe o seu comentário. O atendimento virtual é um projeto novo e a sua opinião é essencial para que ele evolua </div> <div class='resposta-satisfacao'> <textarea class='texto-area-satisfacao'></textarea> </div> <div class='enviar-ultima'> <input type='button' id='button-satisfacao-enviar' class='ultima-button-satisfacao ' value='Enviar'> <input type='button' id='button-satisfacao-atras' class='ultima-button-satisfacao ' value='Voltar'> </div> </div> </section>";
      div.innerHTML = "<link href='http://localhost:3030/css/main.css' rel='stylesheet'/>"+
         "<link rel='stylesheet' type='text/css' href='https://vivi-tv-tests.mybluemix.net/css/font-awesome.min.css'>"+
         // "<script src='https://code.jquery.com/jquery-1.12.4.js'></script>"+
         // "<script src='https://code.jquery.com/ui/1.12.1/jquery-ui.js'></script>"+
         // "<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDLFphJvAnHema1Tjx1XSHY8UCnCDBxjRE'></script>"+
         // "<script src='https://vivo-b2c.mybluemix.net/js/jquery-move.js'></script>"+
         // "<script src='https://vivo-b2c.mybluemix.net/js/jquery-mask.js'></script>"+
         // "<script src='https://vivo-b2c.mybluemix.net/js/ua-parse.js'></script>"+
         "<section id='poupchat' style='display: none;'>"+
               "<div class='top-chat  row'>"+
                     "<img class='img-vivo-chat col-md-4' src='https://vivi-tv-tests.mybluemix.net/img/vivologo1.png'>"+
                     "<img class='img-vivo-direcao col-md-4' src='https://vivi-tv-tests.mybluemix.net/img/draggable.png'>"+
                     "<a href='#' class='icon-chat-0'>"+
                           "<div tabindex='0' title='Botão Aúdio - Clique para mutar o aúdio.' class='col-md-1 top-seta-0' style='display: none;'></div>"+
                     "</a>"+
                     "<a href='#' class='icon-chat-1' style='display: none;'>"+
                           "<div tabindex='0' title='Botão minimizar - Clique para minimizar o chat.' "+
                            "class='col-md-1 top-seta'></div>"+
                     "</a>"+
               "</div>"+
                "<a href='#' class='icon-chat-2' style='display: none;'>"+
                           "<div tabindex='0' title='Botão fechar - Clique para fechar o chat.' class='col-md-1 top-seta-1'></div>"+
                     "</a>"+
               "<div class='poupchat-vivo'>"+
                     "<video id='video0' class='video' loop='true' >"+
                           "<source src='https://vivo-b2c.mybluemix.net/video/02_VIVI_REPOUSO_NEW.mp4' type='video/mp4'>"+
                     "</video>"+
                     "<video id='video1' class='video' style='display: none;'>"+
                           "<source src='https://vivo-b2c.mybluemix.net/video/01_VIVI_APRESENTACAO_NEW.mp4' type='video/mp4'>"+
                     "</video>"+
                     "<video id='video3' class='video' style='display: none;'>"+
                           "<source src='https://vivo-b2c.mybluemix.net/video/07_VIVO_RESPOSTA_POSITIVA_3_NEW.mp4' type='video/mp4'>"+
                     "</video>"+
                     "<video id='video4' class='video' style='display: none;'>"+
                           "<source src='https://vivo-b2c.mybluemix.net/video/06_VIVO_ENCERRAMENTO_OBRIGADO_NEW.mp4' type='video/mp4'>"+
                     "</video>"+
                     "<div id='tel' style='display: none;'>"+
                           "<span>"+
                                 "<p class='p-eva-vivi'><a class='informacao'></a> Olá, eu sou a Vivi, a Assistente Virtual da Vivo.</p>"+
                                 "<p class='p-eva-vivi'> Estou aqui para ajudá-lo com suas dúvidas. Basta escrever uma pergunta, que eu ofereço algumas opções de resposta. Depois, é só clicar em uma das opções que aparecem e seguir as orientações.</p>"+
                                 "<p class='p-eva-vivi'>Vamos começar?</p>"+
                                 "<p class='p-eva-vivi'>Se preferir, informe seu número de telefone com DDD ou clique em iniciar</p>."+
                           "</span>"+
                           "<input type='text' class='input-everis' placeholder='Escreva seu DDD + telefone'>"+
                           "<input type='button' id='inicio' class='button-everis' tabindex='0' title='Botão iniciar - selecione para iniciar a conversa' value='Iniciar'>"+
                     "</div>"+
                     "<div id='chat' style='display:none'>"+
                           "<div class='scroll-everis'>"+
                                 "<div class='chat-message row'>"+
                                       "<p class='texto-vivi'><a class='informacao'></a> <span class='texto-watson'>Vivi</span></p>"+
                                       "<span class='resposta-vivi'>Qual é a sua dúvida?</span>"+
                                 "</div>"+
                           "</div>"+

                           "<div class='input-box-vivi'>"+   
                           "<input type='text' id='texto' placeholder='Escreva sua pergunta'>"+
                           "<input type='button' id='enviar' class='button-everis-1' value='Enviar'>"+
                           "</div>"+   

                     "</div>"+
                     "<div class='row move-vivi' style='width: 100%;height: 33px;'>"+
                           "<div class='icon-move-dow col-md-8'></div>"+
                           "<div class='font-everis'>"+
                                 "<span>Powered by</span><a href='http://www.everis.com/' style='text-decoration: none;color: #6e2494;'> Everis </a>"+
                           "</div>"+
                     "</div>"+
               "</div>"+
               "<div class='poup-intent' style='display: none'>"+
                     "<span class='icon-x'><div class='xix'></div></span>"+
                     "<div class='scroll-poup' draggable='false'> </div>"+
                     "<div id='seta' class='seta-poup'></div>"+
               "</div>"+
               "<script type='text/javascript' src='https://l2.io/ip.js?var=userip'></script>"+
         "</section>"+
         "<a href='javascript:void(0)' id='web' title='Assistente Virtual Vivo - Clique para abrir o chat.'"+
         " class='assistent' style='display:none'></a>"+
         "<section class='satisfacao' style='display:none'>"+
               "<div class='titulo-satisfacao'>"+
                     "<span class='titulo-texto'>Pesquisa de Satisfação</span>"+
                     "<span class='icon-satis'><div class='satisx' aria-hidden='true'></div></span>"+
               "</div>"+
               "<div id='satisfacao'>"+
                     "<div class='pergunta-satisfacao'>"+
                           "<span class='titulo-texto'>Como você avalia o atendimento da Vivi?</span>"+
                           "<div class='resposta-satisfacao'>"+
                                 "<input type='radio' name='satisf' value='4' class='resposta-satisfacao-input' >"+
                                 "<span class='font-satisfacao-check'>Muito Bom</span>"+
                                 "<input type='radio' name='satisf' value='3' class='resposta-satisfacao-input'>"+
                                 "<span class='font-satisfacao-check'>Bom</span>"+
                                 "<input type='radio' name='satisf' value='2' class='resposta-satisfacao-input'>"+
                                 "<span class='font-satisfacao-check' style='margin-left: 9px;'>Regular</span>"+
                                 "<input type='radio' name='satisf' value='1' class='resposta-satisfacao-input'>"+
                                 "<span class='font-satisfacao-check'>Ruim</span>"+
                           "</div>"+
                     "</div>"+
                     "<div class='pergunta-satisfacao'>"+
                           "<span class='titulo-texto'>Suas dúvidas foram solucionadas?</span>"+
                           "<div class='resposta-satisfacao'>"+
                                 "<input type='radio' name='seguin' value='SIM' class='resposta-satisfacao-input' >"+
                                 "<span class='font-satisfacao-check'>Sim</span>"+
                                 "<input type='radio' name='seguin' value='NAO' class='resposta-satisfacao-input'> "+
                                 "<span class='font-satisfacao-check' style='position:absolute'>Não</span>"+
                           "</div>"+
                     "</div>"+
                     "<input type='button' id='button-satisfacao' class='button-satisfacao' value='Seguinte'>"+
               "</div>"+
               "<div id='feedback-satisfacao' style='display:none'>"+
                     "<div class='pergunta-satisfacao'> Caso você não tenha gostado do atendimento, deixe o seu comentário. O atendimento virtual é um projeto novo e a sua opinião é essencial para que ele evolua </div>"+
                     "<div class='resposta-satisfacao'>"+
                           "<textarea class='texto-area-satisfacao'></textarea>"+
                     "</div>"+
                     "<div class='enviar-ultima'>"+
                           "<input type='button' id='button-satisfacao-enviar' class='ultima-button-satisfacao ' value='Enviar'>"+
                           "<input type='button' id='button-satisfacao-atras' class='ultima-button-satisfacao ' value='Voltar'>"+
                     "</div>"+
               "</div>"+
         "</section>";
   
      // var head = document.getElementsByTagName('head')[0];
      // var script = document.createElement('script');
      // script.type= 'text/javascript';
      // script.src= 'http://localhost:3030/js/jquery.mask.min.js';
      // head.appendChild(script);
    
     
      // var head = document.getElementsByTagName('head')[0];
      // var script = document.createElement('script');
      // script.type= 'text/javascript';
      // script.src= 'https://vivo-b2c.mybluemix.net/js/jquery-move.js';
      // head.appendChild(script);
   
      
   
      setTimeout(function(){
         var head = document.getElementsByTagName('head')[0];
         var script = document.createElement('script');
         script.type= 'text/javascript';
         script.src= 'http://localhost:3030/js/ua-parse.js';
         //script.src= 'https://vivi-tv-tests.mybluemix.net/js/ua-parse.js';
         head.appendChild(script);
         document.getElementsByTagName('body')[0].appendChild(div);
      },5000);
   
      console.log(window.location.href + ' web');
   
   })();
   
var languageIsDefault = false;

/* Colocando o Game Canvas na área principal */
document.addEventListener("DOMContentLoaded", function(){

  var element = document.getElementsByClassName("Language");
  if (element[0])
    element[0].addEventListener('click', function() { toggleLanguage(); }, false);
  
  toggleLanguage();
}, false);

var toggleLanguage = function(id){
  languageIsDefault = !languageIsDefault;
  if (languageIsDefault){
    var element = document.getElementsByClassName("LanguageIndicator");
    if (element[0])
      element[0].innerHTML = "EN"
    var element = document.getElementsByClassName("Inicio");
    if (element[0])
      element[0].innerHTML = "START";
    var element = document.getElementsByClassName("Games");
    if (element[0])
      element[0].innerHTML = "GAMES";
    var element = document.getElementsByClassName("Sobre");
    if (element[0])
      element[0].innerHTML = "ABOUT";
    var element = document.getElementsByClassName("Contato");
    if (element[0])
      element[0].innerHTML = "CONTACT";
    var element = document.getElementsByClassName("Presskit");
    if (element[0])
      element[0].innerHTML = "PRESS KIT";
    var element = document.getElementsByClassName("Jobs");
    if (element[0])
      element[0].innerHTML = "JOBS";
    var element = document.getElementsByClassName("Aboutsectiontitle");
    if (element[0])
      element[0].innerHTML = "VISH";
    var element = document.getElementsByClassName("Abouttexttitle");
    if (element[0])
      element[0].innerHTML = "About our studio";
    var element = document.getElementsByClassName("Abouttext1");
    if (element[0])
      element[0].innerHTML = "We are a Brazilian company based in Bahia, founded in 2022. We develop games for Steam and are planning to expand in the near future.";
    var element = document.getElementsByClassName("Abouttext2");
    if (element[0])
      element[0].innerHTML = "Our primary focus is to create engaging, entertaining games with distinctive designs. Currently, we collaborate with a publisher to distribute our games in Asia, while we handle self-publishing for the rest of the world.";
    var element = document.getElementsByClassName("CoFundadorGameDesigner");
    if (element[0])
      element[0].innerHTML = "Co-founder, Game designer";
    if (element[1])
      element[1].innerHTML = "Co-founder, Game designer";
    var element = document.getElementsByClassName("Contactsectiontitle");
    if (element[0])
      element[0].innerHTML = "Did you like it? Contact us!";
    var element = document.getElementsByClassName("Contacttext");
    if (element[0])
      element[0].innerHTML = "We are available for contact through our platforms.";
    var element = document.getElementsByClassName("Discordtext");
    if (element[0])
      element[0].innerHTML = "Our community discord.";
    var element = document.getElementsByClassName("Emailtext");
    if (element[0])
      element[0].innerHTML = "Send us an email!";
    var element = document.getElementsByClassName("Steamtext");
    if (element[0])
      element[0].innerHTML = "Our Steam forum.";
    var element = document.getElementsByClassName("Presskittext");
    if (element[0])
      element[0].innerHTML = "Arts and information for the press, or for content creators! We will always be updating these materials.";
    var element = document.getElementsByClassName("Presskittextvish");
    if (element[0])
      element[0].innerHTML = "Vish press kit";
    var element = document.getElementsByClassName("Presskitsectiontitle");
    if (element[0])
      element[0].innerHTML = "Press kit";
    var element = document.getElementsByClassName("Presskittextking");
    if (element[0])
      element[0].innerHTML = "Just King press kit";
    var element = document.getElementsByClassName("Baixar");
    if (element[0])
      element[0].innerHTML = "Download!";
    if (element[1])
      element[1].innerHTML = "Download!";
    var element = document.getElementsByClassName("Jobssectiontitle");
    if (element[0])
      element[0].innerHTML = "Jobs";
    var element = document.getElementsByClassName("Jobstext");
    if (element[0])
      element[0].innerHTML = "If you are interested in working with us, please fill out the form below!";
    var element = document.getElementsByClassName("PreencherFormulRio");
    if (element[0])
      element[0].innerHTML = "FILL OUT THE FORM";
    var element = document.getElementsByClassName("Gamestexttitle");
    if (element[0])
      element[0].innerHTML = "The most adorable horde mower in a roguelite package!";
    var element = document.getElementsByClassName("Gamestext1");
    if (element[0])
      element[0].innerHTML = "Just King has sold over 120,000 copies on Steam, marking our debut into commercial game publishing.";
    var element = document.getElementsByClassName("Gamestext2");
    if (element[0])
      element[0].innerHTML = "In this game, you will assemble your party of heroes to protect the king as you venture through fantastical lands, battling fearsome kings and deadly armies. Strategically use your treasure to recruit and empower powerful heroes... or the Bard.";
    var element = document.getElementsByClassName("VejaOJogoNaSteam");
    if (element[0])
      element[0].innerHTML = "Check out on Steam!";
  }else{
    var element = document.getElementsByClassName("LanguageIndicator");
    if (element[0])
      element[0].innerHTML = "PT"
    var element = document.getElementsByClassName("Inicio");
    if (element[0])
      element[0].innerHTML = "INÍCIO";
    var element = document.getElementsByClassName("Games");
    if (element[0])
      element[0].innerHTML = "JOGOS";
    var element = document.getElementsByClassName("Sobre");
    if (element[0])
      element[0].innerHTML = "SOBRE";
    var element = document.getElementsByClassName("Contato");
    if (element[0])
      element[0].innerHTML = "CONTATO";
    var element = document.getElementsByClassName("Presskit");
    if (element[0])
      element[0].innerHTML = "PRESS KIT";
    var element = document.getElementsByClassName("Jobs");
    if (element[0])
      element[0].innerHTML = "VAGAS";
    var element = document.getElementsByClassName("Aboutsectiontitle");
    if (element[0])
      element[0].innerHTML = "VISH";
    var element = document.getElementsByClassName("Abouttexttitle");
    if (element[0])
      element[0].innerHTML = "Sobre nosso estúdio";
    var element = document.getElementsByClassName("Abouttext1");
    if (element[0])
      element[0].innerHTML = "Somos uma empresa brasileira localizada na Bahia, fundada em 2022, produzimos jogos para Steam e estamos planejando expandir em breve.";
    var element = document.getElementsByClassName("Abouttext2");
    if (element[0])
      element[0].innerHTML = "Nosso foco é fazer jogos divertidos, interessantes e com design marcante. Atualmente trabalhamos com uma publisher que faz a distribuição dos nossos jogos na Ásia e fazemos self publishing no resto do mundo.";
    var element = document.getElementsByClassName("CoFundadorGameDesigner");
    if (element[0])
      element[0].innerHTML = "Co-fundador, Game designer";
    element[1].innerHTML = "Co-fundador, Game designer";
    var element = document.getElementsByClassName("Contactsectiontitle");
    if (element[0])
      element[0].innerHTML = "Gostou? Contate-nos!";
    var element = document.getElementsByClassName("Contacttext");
    if (element[0])
      element[0].innerHTML = "Estamos disponíveis para contato através das nossas plataformas.";
    var element = document.getElementsByClassName("Discordtext");
    if (element[0])
      element[0].innerHTML = "O discord da nossa comunidade.";
    var element = document.getElementsByClassName("Emailtext");
    if (element[0])
      element[0].innerHTML = "Nos envie um e-mail!";
    var element = document.getElementsByClassName("Steamtext");
    if (element[0])
      element[0].innerHTML = "Nosso fórum na Steam.";
    var element = document.getElementsByClassName("Presskittext");
    if (element[0])
      element[0].innerHTML = "Artes e infos para a imprensa, ou para criadores de conteúdo! Estaremos sempre atualizando esses materiais.";
    var element = document.getElementsByClassName("Presskittextvish");
    if (element[0])
      element[0].innerHTML = "Press kit da Vish";
    var element = document.getElementsByClassName("Presskitsectiontitle");
    if (element[0])
      element[0].innerHTML = "Press kit";
    var element = document.getElementsByClassName("Presskittextking");
    if (element[0])
      element[0].innerHTML = "Press kit do Just King";
    var element = document.getElementsByClassName("Baixar");
    if (element[0])
      element[0].innerHTML = "Download!";
    if (element[1])
      element[1].innerHTML = "Download!";
    var element = document.getElementsByClassName("Jobssectiontitle");
    if (element[0])
      element[0].innerHTML = "Vagas";
    var element = document.getElementsByClassName("Jobstext");
    if (element[0])
      element[0].innerHTML = "Se você se interessou em trabalhar conosco, preencha o formulário abaixo!";
    var element = document.getElementsByClassName("PreencherFormulRio");
    if (element[0])
      element[0].innerHTML = "PREENCHER FORMULÁRIO";
    var element = document.getElementsByClassName("Gamestexttitle");
    if (element[0])
      element[0].innerHTML = "O moedor de hordas mais fofo que existe no formato roguelite!";
    var element = document.getElementsByClassName("Gamestext1");
    if (element[0])
      element[0].innerHTML = "Just King conta com mais de 120 mil cópias vendidas na Steam, é o nosso primeiro jogo publicado comercialmente.";
    var element = document.getElementsByClassName("Gamestext2");
    if (element[0])
      element[0].innerHTML = "Nesse jogo você montará seu grupo de heróis para proteger o rei se aventurando por terras fantásticas, lutando contra reis temíveis e exércitos mortais. Use seu tesouro estrategicamente para contratar e fortalecer heróis poderosos... Ou o Bardo.";
    var element = document.getElementsByClassName("VejaOJogoNaSteam");
    if (element[0])
      element[0].innerHTML = "Veja o jogo na Steam!";
  }
}
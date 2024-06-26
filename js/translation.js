var languageIsDefault = false;

/* Colocando o Game Canvas na área principal */
document.addEventListener("DOMContentLoaded", function(){

  var element = document.getElementsByClassName("Language");
  element[0].addEventListener('click', function() { toggleLanguage(); }, false);
  
  toggleLanguage();
}, false);

var toggleLanguage = function(id){
  languageIsDefault = !languageIsDefault;
  if (languageIsDefault){
    var element = document.getElementsByClassName("LanguageIndicator");
    element[0].innerHTML = "EN"
    var element = document.getElementsByClassName("Inicio");
    element[0].innerHTML = "START";
    var element = document.getElementsByClassName("Games");
    element[0].innerHTML = "GAMES";
    var element = document.getElementsByClassName("Sobre");
    element[0].innerHTML = "ABOUT";
    var element = document.getElementsByClassName("Contato");
    element[0].innerHTML = "CONTACT";
    var element = document.getElementsByClassName("Presskit");
    element[0].innerHTML = "PRESS KIT";
    var element = document.getElementsByClassName("Jobs");
    element[0].innerHTML = "JOBS";
    var element = document.getElementsByClassName("Aboutsectiontitle");
    element[0].innerHTML = "VISH";
    var element = document.getElementsByClassName("Abouttexttitle");
    element[0].innerHTML = "About our studio";
    var element = document.getElementsByClassName("Abouttext1");
    element[0].innerHTML = "We are a Brazilian company based in Bahia, founded in 2022. We develop games for Steam and are planning to expand in the near future.";
    var element = document.getElementsByClassName("Abouttext2");
    element[0].innerHTML = "Our primary focus is to create engaging, entertaining games with distinctive designs. Currently, we collaborate with a publisher to distribute our games in Asia, while we handle self-publishing for the rest of the world.";
    var element = document.getElementsByClassName("CoFundadorGameDesigner");
    element[0].innerHTML = "Co-founder, Game designer";
    element[1].innerHTML = "Co-founder, Game designer";
    var element = document.getElementsByClassName("Contactsectiontitle");
    element[0].innerHTML = "Did you like it? Contact us!";
    var element = document.getElementsByClassName("Contacttext");
    element[0].innerHTML = "We are available for contact through our platforms.";
    var element = document.getElementsByClassName("Discordtext");
    element[0].innerHTML = "Our community discord.";
    var element = document.getElementsByClassName("Emailtext");
    element[0].innerHTML = "Send us an email!";
    var element = document.getElementsByClassName("Steamtext");
    element[0].innerHTML = "Our Steam forum.";
    var element = document.getElementsByClassName("Presskittext");
    element[0].innerHTML = "Arts and information for the press, or for content creators! We will always be updating these materials.";
    var element = document.getElementsByClassName("Presskittextvish");
    element[0].innerHTML = "Vish press kit";
    var element = document.getElementsByClassName("Presskitsectiontitle");
    element[0].innerHTML = "Press kit";
    var element = document.getElementsByClassName("Presskittextking");
    element[0].innerHTML = "Just King press kit";
    var element = document.getElementsByClassName("Baixar");
    element[0].innerHTML = "Download!";
    element[1].innerHTML = "Download!";
    var element = document.getElementsByClassName("Jobssectiontitle");
    element[0].innerHTML = "Jobs";
    var element = document.getElementsByClassName("Jobstext");
    element[0].innerHTML = "If you are interested in working with us, please fill out the form below! Although we do not currently have any open positions available to the public, submitted forms will be reviewed prior to the commencement of our hiring process.";
    var element = document.getElementsByClassName("PreencherFormulRio");
    element[0].innerHTML = "FILL OUT THE FORM";
    var element = document.getElementsByClassName("Gamestexttitle");
    element[0].innerHTML = "The most adorable horde mower in a roguelite package!";
    var element = document.getElementsByClassName("Gamestext1");
    element[0].innerHTML = "Just King has sold over 120,000 copies on Steam, marking our debut into commercial game publishing.";
    var element = document.getElementsByClassName("Gamestext2");
    element[0].innerHTML = "In this game, you will assemble your party of heroes to protect the king as you venture through fantastical lands, battling fearsome kings and deadly armies. Strategically use your treasure to recruit and empower powerful heroes... or the Bard.";
    var element = document.getElementsByClassName("VejaOJogoNaSteam");
    element[0].innerHTML = "Check out on Steam!";
  }else{
    var element = document.getElementsByClassName("LanguageIndicator");
    element[0].innerHTML = "PT"
    var element = document.getElementsByClassName("Inicio");
    element[0].innerHTML = "INÍCIO";
    var element = document.getElementsByClassName("Games");
    element[0].innerHTML = "JOGOS";
    var element = document.getElementsByClassName("Sobre");
    element[0].innerHTML = "SOBRE";
    var element = document.getElementsByClassName("Contato");
    element[0].innerHTML = "CONTATO";
    var element = document.getElementsByClassName("Presskit");
    element[0].innerHTML = "PRESS KIT";
    var element = document.getElementsByClassName("Jobs");
    element[0].innerHTML = "VAGAS";
    var element = document.getElementsByClassName("Aboutsectiontitle");
    element[0].innerHTML = "VISH";
    var element = document.getElementsByClassName("Abouttexttitle");
    element[0].innerHTML = "Sobre nosso estúdio";
    var element = document.getElementsByClassName("Abouttext1");
    element[0].innerHTML = "Somos uma empresa brasileira localizada na Bahia, fundada em 2022, produzimos jogos para Steam e estamos planejando expandir em breve.";
    var element = document.getElementsByClassName("Abouttext2");
    element[0].innerHTML = "Nosso foco é fazer jogos divertidos, interessantes e com design marcante. Atualmente trabalhamos com uma publisher que faz a distribuição dos nossos jogos na Ásia e fazemos self publishing no resto do mundo.";
    var element = document.getElementsByClassName("CoFundadorGameDesigner");
    element[0].innerHTML = "Co-fundador, Game designer";
    element[1].innerHTML = "Co-fundador, Game designer";
    var element = document.getElementsByClassName("Contactsectiontitle");
    element[0].innerHTML = "Gostou? Contate-nos!";
    var element = document.getElementsByClassName("Contacttext");
    element[0].innerHTML = "Estamos disponíveis para contato através das nossas plataformas.";
    var element = document.getElementsByClassName("Discordtext");
    element[0].innerHTML = "O discord da nossa comunidade.";
    var element = document.getElementsByClassName("Emailtext");
    element[0].innerHTML = "Nos envie um e-mail!";
    var element = document.getElementsByClassName("Steamtext");
    element[0].innerHTML = "Nosso fórum na Steam.";
    var element = document.getElementsByClassName("Presskittext");
    element[0].innerHTML = "Artes e infos para a imprensa, ou para criadores de conteúdo! Estaremos sempre atualizando esses materiais.";
    var element = document.getElementsByClassName("Presskittextvish");
    element[0].innerHTML = "Press kit da Vish";
    var element = document.getElementsByClassName("Presskitsectiontitle");
    element[0].innerHTML = "Press kit";
    var element = document.getElementsByClassName("Presskittextking");
    element[0].innerHTML = "Press kit do Just King";
    var element = document.getElementsByClassName("Baixar");
    element[0].innerHTML = "Download!";
    element[1].innerHTML = "Download!";
    var element = document.getElementsByClassName("Jobssectiontitle");
    element[0].innerHTML = "Vagas";
    var element = document.getElementsByClassName("Jobstext");
    element[0].innerHTML = "Se você se interessou em trabalhar conosco, preencha o formulário abaixo! Ainda não estamos com vagas abertas ao público, mas formulários enviados serão checados antes de abrirmos essas vagas!";
    var element = document.getElementsByClassName("PreencherFormulRio");
    element[0].innerHTML = "PREENCHER FORMULÁRIO";
    var element = document.getElementsByClassName("Gamestexttitle");
    element[0].innerHTML = "O moedor de hordas mais fofo que existe no formato roguelite!";
    var element = document.getElementsByClassName("Gamestext1");
    element[0].innerHTML = "Just King conta com mais de 120 mil cópias vendidas na Steam, é o nosso primeiro jogo publicado comercialmente.";
    var element = document.getElementsByClassName("Gamestext2");
    element[0].innerHTML = "Nesse jogo você montará seu grupo de heróis para proteger o rei se aventurando por terras fantásticas, lutando contra reis temíveis e exércitos mortais. Use seu tesouro estrategicamente para contratar e fortalecer heróis poderosos... Ou o Bardo.";
    var element = document.getElementsByClassName("VejaOJogoNaSteam");
    element[0].innerHTML = "Veja o jogo na Steam!";
  }
}
var functionforscroll = function(id){
  var reqId = "#"+id;
  window.scrollTo(0, $(reqId).offset().top-85);
}

/* Colocando o Game Canvas na área principal */
document.addEventListener("DOMContentLoaded", function(){

  var element = document.getElementsByClassName("HomeExport");
  element[0].setAttribute("id", "BannerTab");
  var element = document.getElementsByClassName("DivJustKing");
  element[0].setAttribute("id", "GamesTab");
  var element = document.getElementsByClassName("DivVish");
  element[0].setAttribute("id", "SobreTab");
  var element = document.getElementsByClassName("DivContato");
  element[0].setAttribute("id", "ContactTab");
  var element = document.getElementsByClassName("DivPresskit");
  element[0].setAttribute("id", "PresskitTab");
  var element = document.getElementsByClassName("DivJobs");
  element[0].setAttribute("id", "JobsTab");

  var element = document.getElementsByClassName("Inicio");
  element[0].classList.add("NavButton");
  element[0].addEventListener('click', function() { functionforscroll("BannerTab")}, false);

  var element = document.getElementsByClassName("Games");
  element[0].classList.add("NavButton");
  element[0].addEventListener('click', function() { functionforscroll("GamesTab")}, false);

  var element = document.getElementsByClassName("Sobre");
  element[0].classList.add("NavButton");
  element[0].addEventListener('click', function() { functionforscroll("SobreTab")}, false);

  var element = document.getElementsByClassName("Contato");
  element[0].classList.add("NavButton");
  element[0].addEventListener('click', function() { functionforscroll("ContactTab")}, false);

  var element = document.getElementsByClassName("Presskit");
  element[0].classList.add("NavButton");
  element[0].addEventListener('click', function() { functionforscroll("PresskitTab")}, false);

  var element = document.getElementsByClassName("Jobs");
  element[0].classList.add("NavButton");
  element[0].addEventListener('click', function() { functionforscroll("JobsTab")}, false);

  var element = document.getElementsByClassName("Language");
  element[0].classList.add("NavButton");

  var element = document.getElementsByClassName("Justkingsteamicon");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('https://store.steampowered.com/app/1059980/Just_King/', '_blank'); }, false);

  var element = document.getElementsByClassName("Justkingyoutubeicon");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('https://www.youtube.com/@vishgamestudio9934/videos', '_blank'); }, false);

  var element = document.getElementsByClassName("Discordicon");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('https://discord.gg/eChV9gS5jS', '_blank'); }, false);
  var element = document.getElementsByClassName("EMailicon");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('mailto:contact@vishgamestudio.com', '_blank'); }, false);
  var element = document.getElementsByClassName("Steamicon");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('https://steamcommunity.com/app/1059980/discussions/', '_blank'); }, false);

  var element = document.getElementsByClassName("Frame9");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/folders/1ITk78Qt1wGptGhW3WD9xECLgr0HBk9TZ?usp=sharing', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame10");
  element[0].classList.add("RoundButton");
  element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/u/4/folders/1ZrAmnBklwCDwJrziyTh5SKPKq-7LJ24u', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame24");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://store.steampowered.com/app/1059980/Just_King/', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame11");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/folders/1ITk78Qt1wGptGhW3WD9xECLgr0HBk9TZ?usp=sharing', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame12");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/u/4/folders/1ZrAmnBklwCDwJrziyTh5SKPKq-7LJ24u', '_blank'); }, false);

  var element = document.getElementsByClassName("Formbutton");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://docs.google.com/forms/d/e/1FAIpQLSf8hHLqhoairhEj0o4sH05gDKuIAqUR8Hr8T7IxbxsirYMg8A/viewform', '_blank'); }, false);
 
  var element = document.getElementsByClassName("VideoFrame");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://store.steampowered.com/app/1059980/Just_King/', '_blank'); }, false);
  
  var element = document.getElementsByClassName("Frame22");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://www.linkedin.com/in/enriquewr/', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame19");
  element[0].classList.add("RectButton");
  element[0].addEventListener('click', function() { window.open('https://www.linkedin.com/in/diemorth/', '_blank'); }, false);
}, false);
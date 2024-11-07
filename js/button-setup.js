var functionforscroll = function(id){
  var reqId = "#"+id;
  window.scrollTo(0, $(reqId).offset().top-85);
}

/* Colocando o Game Canvas na área principal */
document.addEventListener("DOMContentLoaded", function(){

  var element = document.getElementsByClassName("HomeExport");
  if (element[0])
    element[0].setAttribute("id", "BannerTab");
  var element = document.getElementsByClassName("DivJustKing");
  if (element[0])
    element[0].setAttribute("id", "GamesTab");
  var element = document.getElementsByClassName("DivVish");
  if (element[0])
    element[0].setAttribute("id", "SobreTab");
  var element = document.getElementsByClassName("TTuloVish");
  if (element[0])
    element[0].setAttribute("id", "SobreTabTarget");
  var element = document.getElementsByClassName("DivContato");
  if (element[0])
    element[0].setAttribute("id", "ContactTab");
  var element = document.getElementsByClassName("DivPresskit");
  if (element[0])
    element[0].setAttribute("id", "PresskitTab");
  var element = document.getElementsByClassName("DivJobs");
  if (element[0])
    element[0].setAttribute("id", "JobsTab");

  var element = document.getElementsByClassName("Inicio");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { functionforscroll("BannerTab")}, false);

  var element = document.getElementsByClassName("Games");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { functionforscroll("GamesTab")}, false);

  var element = document.getElementsByClassName("Sobre");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { functionforscroll("SobreTabTarget")}, false);

  var element = document.getElementsByClassName("Contato");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { functionforscroll("ContactTab")}, false);

  var element = document.getElementsByClassName("Presskit");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { functionforscroll("PresskitTab")}, false);

  var element = document.getElementsByClassName("Jobs");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { functionforscroll("JobsTab")}, false);

  var element = document.getElementsByClassName("Language");
  if (element[0])
    element[0].classList.add("NavButton");

  var element = document.getElementsByClassName("Justkingsteamicon");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://store.steampowered.com/app/1059980/Just_King/', '_blank'); }, false);

  var element = document.getElementsByClassName("Justkingyoutubeicon");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://www.youtube.com/@vishgamestudio9934/videos', '_blank'); }, false);

  var element = document.getElementsByClassName("Discordicon");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://discord.gg/eChV9gS5jS', '_blank'); }, false);
  var element = document.getElementsByClassName("EMailicon");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('mailto:contact@vishgamestudio.com', '_blank'); }, false);
  var element = document.getElementsByClassName("Steamicon");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://steamcommunity.com/app/1059980/discussions/', '_blank'); }, false);

  var element = document.getElementsByClassName("Frame9");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/folders/1ITk78Qt1wGptGhW3WD9xECLgr0HBk9TZ?usp=sharing', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame10");
  if (element[0])
    element[0].classList.add("RoundButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/u/4/folders/1ZrAmnBklwCDwJrziyTh5SKPKq-7LJ24u', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame24");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://store.steampowered.com/app/1059980/Just_King/', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame11");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/folders/1ITk78Qt1wGptGhW3WD9xECLgr0HBk9TZ?usp=sharing', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame12");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://drive.google.com/drive/u/4/folders/1ZrAmnBklwCDwJrziyTh5SKPKq-7LJ24u', '_blank'); }, false);

  var element = document.getElementsByClassName("Formbutton");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://docs.google.com/forms/d/e/1FAIpQLSf8hHLqhoairhEj0o4sH05gDKuIAqUR8Hr8T7IxbxsirYMg8A/viewform', '_blank'); }, false);
 
  var element = document.getElementsByClassName("VideoFrame");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://store.steampowered.com/app/1059980/Just_King/', '_blank'); }, false);
  
  var element = document.getElementsByClassName("Frame22");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://www.linkedin.com/in/enriquewr/', '_blank'); }, false);
  var element = document.getElementsByClassName("Frame19");
  if (element[0])
    element[0].classList.add("RectButton");
  if (element[0])
    element[0].addEventListener('click', function() { window.open('https://www.linkedin.com/in/diemorth/', '_blank'); }, false);

  var element = document.getElementsByClassName("Inicio privacy");
  if (element[0])
    element[0].classList.add("NavButton");
  if (element[0])
    element[0].addEventListener('click', function() { location.href = "index.html";}, false);
}, false);
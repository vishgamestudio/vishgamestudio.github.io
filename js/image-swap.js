/* Colocando o Game Canvas na área principal */
document.addEventListener("DOMContentLoaded", function(){
  $(".HeroesBackground").attr("src","img/figma/Heroes 1.png");
  $(".BackgroundPage").attr("src","");
  $(".BackgroundPage").attr("style","");
  $(".HeroesBanner").attr("src","img/figma/Heroes 1.png");
  $(".VishLogo2").attr("src","img/figma/vish-logo 2.png");
  $(".IconeFinal1").attr("src","img/figma/vish.png");
  $(".King1").attr("src","img/figma/king.png");
  $(".Subtract").attr("src","img/figma/button-l.png");
  $(".VideoThumbnail").attr("src","img/figma/King.gif");
  $(".Classgif").attr("src","img/figma/Classes.gif");

  var languageIcon = document.createElement('i');
  languageIcon.className = "fas fa-globe-americas";
  var languageOutput = document.createElement('div');
  languageOutput.innerHTML = "EN";
  languageOutput.className = "LanguageIndicator";
  var languageDiv = document.getElementsByClassName("Language");
  languageDiv[0].innerHTML = "";
  languageDiv[0].appendChild(languageIcon);
  languageDiv[0].appendChild(languageOutput);
  
  $(".Discordicon").attr("src","img/figma/DiscordIcon.png");
  $(".Steamicon").attr("src","img/figma/SteamIcon.png");
  $(".EMailicon").attr("src","img/figma/MailIcon.png");

  $(".Discordqr").attr("src","img/figma/Discordqr.png");
  $(".Steamqr").attr("src","img/figma/Steamqr.png");
  $(".EMailqr").attr("src","img/figma/Mailqr.png");

  $(".Justkingqr").attr("src","img/figma/Kingqr.png");

  $(".Justkingyoutubeicon").attr("src","img/figma/YoutubeIcon.png");
  $(".Justkingsteamicon").attr("src","img/figma/SteamIcon.png");
}, false);
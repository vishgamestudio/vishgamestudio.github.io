/* Informações dos jogos */
var gamesAvailable = [
  [
    
   '« KEYHOLDER »',
   'Relaxing puzzle game where you create a path to clear out all the locks! Click and drag a key to slide it into the corresponding lock. If a lock has a number, it needs that many keys of the same color before it opens. In later levels, some tiles will be highlighted in a certain color. That means only keys of that color can pass through that tile.',
   'https://itch.io/embed-upload/4970049',
   'img/GamesForLicensing/game08.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« COGNITE »',
   'Guide our cute crocodile by solving puzzles with gears and portals in a dream world<br>while trying to remember what happened before you fell asleep.<br>15 cute levels with some good puzzles.',
   'https://itch.io/embed-upload/2935274',
   'img/GamesForLicensing/game07.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« CACTU-SAMA 2 »',
   'Cactu-Sama 2 is a game where you help our cute cactus to find his Balloon-kouhai again while using colorful blocks to make his path, avoiding water and spikes, solving great puzzles and getting all the art pieces! Use buttons to enable and disable blocks. Prevent the cactus from getting wet with water. A game with simple controls will challenge your brain for a few minutes... Again! Can you beat the 15 level challenge?',
   'https://itch.io/embed-upload/4329112',
   'img/GamesForLicensing/game06.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« FROSTWING »',
   'Guide our cute penguin with colorful and smooth blocks, combining mechanics to solve big puzzles and a big mystery! With impressive songs by TAD and Fupi, Frostwing will make you relax while you exercise your mind!<br>Can you beat all 20 levels to get him to his destination?',
   'https://itch.io/embed-upload/1842046',
   'img/GamesForLicensing/game05.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« STARNAUT »',
   'In Starnaut you are drifting in space and have to cross the galaxy managing blocks to avoid getting stuck and collecting stars. Unlock skins when you get stars and get the best time in speedrun mode.<br>Can you beat this 25 level challenge getting all the stars?',
   'https://itch.io/embed-upload/2029207',
   'img/GamesForLicensing/game04.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« FROGGO COINS »',
   'Froggo Coin is a game where you buy blocks and items from vending machines to solve puzzles and get to the top of the mountain before nightfall. Try to keep your coins so you don\'t get stuck. Simple controls and a lo-fi mood to challenge your brain in a quick run of a few minutes. Can you beat this 20 level challenge and get the final scene?',
   'https://itch.io/embed-upload/1527083',
   'img/GamesForLicensing/game03.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« ARCANDIES »',
   'Use arcane magic to solve puzzles and create powerful candies!<br>A maze of potions that must be combined to clear the way, our little witch needs your help!<br>20 levels to make you think a little. Try it now! :D',
   'https://itch.io/embed-upload/4329141',
   'img/GamesForLicensing/game01.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ],
  [
    
   '« CACTU-SAMA »',
   'Cactu-Sama is a game where you help a cactus cross the desert and find his Balloon-kouhai. Using buttons to enable and disable blocks, preventing it from getting wet with water. A game with simple controls will challenge your brain for a few minutes, until you reach this happy ending. Can you beat this 20 level challenge?',
   'https://itch.io/embed-upload/1642159',
   'img/GamesForLicensing/game02.png',
   'width: 1282px; height: 741px',
   'game',
   ''
    
  ]
];

/* Não é necessário alterar nada a partir daqui */

/* Colocando o Game Canvas na área principal */
document.addEventListener("DOMContentLoaded", function(){

  $("#recent-game-showcase").prepend('<center style = "margin-bottom: 5px;"></center>');
  $("#recent-game-showcase > center").prepend('<br>');
  $("#recent-game-showcase > center").prepend('<div id = "showcaseButtons" style="overflow: auto; white-space: nowrap; margin: 5px;" >');
  for (var i = gamesAvailable.length - 1; i >= 0 ; i--)
    $("#showcaseButtons").prepend('<img id = "showcaseGameImg'+i.toString()+'" class="showcaseGameIcon" onclick="changeShowcasingGame('+i.toString()+')" style="width: 162px; height: 100px;"">');
  $("#recent-game-showcase > center").prepend('<hr>');
  $("#recent-game-showcase > center").prepend('<p id = "showcaseGameDescription">'+gamesAvailable[0][1]+'</p>');
  $("#recent-game-showcase > center").prepend('<hr>');
  if (gamesAvailable[0][5] == 'game'){
    $("#recent-game-showcase > center").prepend('<center><div id = "gameCanvas" style="'+gamesAvailable[0][4]+'"><iframe  style="width: 100%; height: 100%" mozallowfullscreen="true" allow="autoplay; fullscreen *; geolocation; microphone; camera; midi" frameborder="0" src="'+gamesAvailable[0][2]+'" msallowfullscreen="true" scrolling="no" allowfullscreen="true" webkitallowfullscreen="true" id="game_drop" allowtransparency="true"></iframe></div></center>');
  }else{
    $("#recent-game-showcase > center").prepend('<center><div id = "gameCanvas" style="'+gamesAvailable[0][4]+'"></div></center>');
    var imageLink = document.createElement('a');
    imageLink.setAttribute('id','imgLink');
    imageLink.setAttribute('href',gamesAvailable[0][6]);
    var imageSlot = document.createElement('img');
    imageSlot.setAttribute('id','img_drop');
    imageSlot.setAttribute('src',gamesAvailable[0][2]);
    imageSlot.setAttribute('style',gamesAvailable[0][4]);
    document.getElementById('gameCanvas').appendChild(imageLink);
    imageLink.appendChild(imageSlot);
  }
  $("#recent-game-showcase > center").prepend('<hr>');
  $("#recent-game-showcase > center").prepend('<h1 id = "showcaseGameTitle">'+gamesAvailable[0][0]+'</h1>');


  for (i in gamesAvailable)
    document.getElementById("showcaseGameImg" + i.toString()).src = gamesAvailable[i][3];
}, true);


/* Troca o game na tela principal */
function changeShowcasingGame(i){
  document.getElementById('showcaseGameTitle').innerHTML = gamesAvailable[i][0];
  document.getElementById('showcaseGameDescription').innerHTML = gamesAvailable[i][1];
  if (gamesAvailable[i][5] == 'game'){
    if (document.getElementById('game_drop') != undefined){
      document.getElementById('game_drop').setAttribute('src', gamesAvailable[i][2]);
    }else{
      if (document.getElementById('imgLink') != undefined)
        document.getElementById('imgLink').remove();
      var gameSlot = document.createElement('iframe');
      gameSlot.setAttribute('id','game_drop');
      gameSlot.setAttribute('style','width: 100%; height: 100%;');
      gameSlot.setAttribute('src',gamesAvailable[i][2]);
      document.getElementById('gameCanvas').appendChild(gameSlot);
    }
    document.getElementById('gameCanvas').setAttribute('style', gamesAvailable[i][4]);
  }else{
    if (document.getElementById('img_drop') != undefined){
      document.getElementById('img_drop').setAttribute('src', gamesAvailable[i][2]);
      document.getElementById('imgLink').setAttribute('href', gamesAvailable[i][6]);
    }else{
      if (document.getElementById('game_drop') != undefined)
        document.getElementById('game_drop').remove();
      var imageLink = document.createElement('a');
      imageLink.setAttribute('id','imgLink');
      imageLink.setAttribute('href',gamesAvailable[i][6]);
      var imageSlot = document.createElement('img');
      imageSlot.setAttribute('id','img_drop');
      imageSlot.setAttribute('src',gamesAvailable[i][2]);
      imageSlot.setAttribute('style',gamesAvailable[i][4]);
      document.getElementById('gameCanvas').appendChild(imageLink);
      imageLink.appendChild(imageSlot);
    }
    document.getElementById('gameCanvas').setAttribute('style', gamesAvailable[i][4]);
  }
}
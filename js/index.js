window.onload = function () {


  var game = new GameMain("game-board");
 
  game.startClock();

  var gunButton = document.getElementsByClassName("turret")[0];

  gunButton.onclick = function () {
    game.player.gunPositioning(gunButton);
    return;
  }

}
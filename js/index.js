window.onload = function () {


  var game = new GameMain("game-board");
 
  game.startClock();

  let gunButton = document.getElementsByClassName("turret")[0];
  let moneyTag = document.getElementById("money");
  game.moneyTag = moneyTag;


  gunButton.onclick = function () {
    game.player.gunPositioning(gunButton);
    return;
  }

}
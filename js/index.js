window.onload = function () {


  var game = new GameMain("game-board");
 
  game.startClock();

  let gunButton = document.getElementsByClassName("turret")[0];
  let moneyTag = document.getElementById("money");
  let buildingButton = document.getElementsByClassName("building")[0];
  
  game.moneyTag = moneyTag;
  

  gunButton.onclick = function () {
    game.player.placeSelector(gunButton, "gun");
  }

  buildingButton.onclick = function() {
    game.player.placeSelector(buildingButton, "building");
  }

}
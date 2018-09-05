window.onload = function () {


  var game = new GameMain("game-board");
 
  game.startClock();
  let get;
  let moneyTag = document.getElementById("money");
  let gunButton = document.getElementsByClassName("gun")[0];
  let laserButton = document.getElementsByClassName("laser")[0];
  let buildingButton = document.getElementsByClassName("building")[0];
  let upgradeButton = document.getElementsByClassName("up")[0];
  let buttons = document.getElementsByClassName("button");
  
  game.moneyTag = moneyTag;
  

  gunButton.onclick = function() {
    game.player.placeSelector(buttons, "gun");
  }

  buildingButton.onclick = function() {
    game.player.placeSelector(buttons, "building");
  }

  laserButton.onclick = function() {
    game.player.placeSelector(buttons, "laser")
  }

  upgradeButton.onclick = function() {
    game.player.placeSelector(buttons, "upgrade")
  }

}
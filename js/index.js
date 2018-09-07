

window.onload = function () {

  startTheme.loop = true;
  startTheme.play();

  let startButton = document.getElementById("start-button");
  var game = new GameMain("game-board");

  startButton.onclick = function StartGame() {

    startTheme.pause();
    mainTheme.loop = true;
    mainTheme.play();


    let mainMenu = document.getElementsByClassName("main-menu")[0];
    mainMenu.style.display = "none";
    game.startClock();

    let moneyTag = document.getElementById("money");
    let gunButton = document.getElementsByClassName("gun")[0];
    let laserButton = document.getElementsByClassName("laser")[0];
    let buildingButton = document.getElementsByClassName("building")[0];
    let upgradeButton = document.getElementsByClassName("laser-to-gun")[0];
    let upgradeGunDamage = document.getElementsByClassName("gun-up-damage")[0];
    let buttons = document.getElementsByClassName("button");

    game.moneyTag = moneyTag;


    gunButton.onclick = function () {
      game.player.placeSelector(buttons, "gun");
    }

    buildingButton.onclick = function () {
      game.player.placeSelector(buttons, "building");
    }

    laserButton.onclick = function () {
      game.player.placeSelector(buttons, "laser")
    }

    upgradeButton.onclick = function () {
      game.player.placeSelector(buttons, "upgrade")
    }

    upgradeGunDamage.onclick = function () {
      game.player.placeSelector(buttons, "upgradeDMG")
    }

  }
}
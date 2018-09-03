
function Player(game) {
  this.game = game;
  this.points = 0;
  this.money = 200;
  this.gunPosition = {};
  this.buildingPosition = {};
}



Player.prototype.createGun = function (game, x, y) {

  let gun = new Gun(this.game, x, y);
  this.game.city.gunsArray.push(gun);
  this.money -= 25;
}



Player.prototype.gunPositioning = function (gunButton) {

  this.gunPosition = { x: 14, y: 0 };
  gunButton.disabled = true;

  const choosePos = event => {
    switch (event.code) {

      case "ArrowDown":
        if (this.gunPosition.y < 9) {
          this.gunPosition.y += 1;
        }
        break;

      case "ArrowUp":
        if (this.gunPosition.y > 0) {
          this.gunPosition.y -= 1;
        }
        break;

      case "Space": {
        let vacant = true;
        for (gun of this.game.city.gunsArray) {
          if (gun.y == this.gunPosition.y) {
            vacant = false;
          }
        }
        if (vacant) {
          this.createGun(this.game, this.gunPosition.x, this.gunPosition.y);
          this.gunPosition = {};
        }
        window.removeEventListener("keydown", choosePos);
        gunButton.disabled = false;
        break;
      }
    }

  }
  window.addEventListener("keydown", choosePos)

}


Player.prototype.buildingPositioning = function (buildingButton) {

  this.buildingPosition = { x: 15, y: 0 };
  buildingButton.disabled = true;

  const choosePos = event => {
    switch (event.code) {

      case "ArrowDown":
        if (this.buildingPosition.y < 9) {
          this.buildingPosition.y += 1;
        }
        break;

      case "ArrowUp":
        if (this.buildingPosition.y > 0) {
          this.buildingPosition.y -= 1;
        }
        break;

      case "ArrowLeft":
        if (this.buildingPosition.x > 15) {
          this.buildingPosition.x -= 1;
        }
        break;

      case "ArrowRight":
        if (this.buildingPosition.x < 19) {
          this.buildingPosition.x += 1;
        }
        break;

      case "Space": {
        let vacant = true;
        for (building of this.game.city.buildingsArray) {
          if (building.y == this.buildingPosition.y && building.x == this.buildingPosition.y) {
            vacant = false;
          }
        }
        if (vacant) {
          this.createBuilding(this.game, this.buildingPosition.x, this.buildingPosition.y);
          this.buildingPosition = {};
        }
        window.removeEventListener("keydown", choosePos);
        buildingButton.disabled = false;
        break;
      }
    }

  }
  window.addEventListener("keydown", choosePos)

}



Player.prototype.createBuilding = function () {
  console.log("BUILD")
  let building = new Building(this.game, this.buildingPosition.x, this.buildingPosition.y);
  this.game.city.buildingsArray.push(building);
  this.money -= 50;
}


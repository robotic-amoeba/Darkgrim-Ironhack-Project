
function Player(game) {
  this.game = game;
  this.points = 0;
  this.money = 200;
  this.tileSelector = {};
}



Player.prototype.createGun = function (game, x, y) {
  if (this.money >= this.game.city.gunPrice) {

    let gun = new Gun(this.game, x, y);
    this.game.city.gunsArray.push(gun);
    this.money -= 25;

  } else {

    console.log("Not enough money");
  }
}



Player.prototype.createBuilding = function () {

  if (this.money >= this.game.city.buildPrice) {

    let building = new Building(this.game, this.tileSelector.x, this.tileSelector.y);
    this.game.city.buildingsArray.push(building);
    this.money -= this.game.city.buildPrice;

  } else {

    console.log("Not enogh money");
  }
}



Player.prototype.placeSelector = function (button, elementToBuild) {

  button.disabled = true;
  if (elementToBuild === "gun") {
    this.tileSelector = { x: 14, y: 0 }
  } else if (elementToBuild === "building") {
    this.tileSelector = { x: 15, y: 0 }
  }

  const choosePos = event => {

    switch (event.code) {

      case "ArrowDown":
        if (this.tileSelector.y < 9) {
          this.tileSelector.y += 1;
          console.log("down");
        }
        break;

      case "ArrowUp":
        if (this.tileSelector.y > 0) {
          this.tileSelector.y -= 1;
          console.log("up")
        }
        break;

      case "ArrowLeft":
        if (elementToBuild === "building" && this.tileSelector.x > 15) {
          this.tileSelector.x -= 1;
        }
        break;

      case "ArrowRight":
        if (elementToBuild === "building" && this.tileSelector.x < 19) {
          this.tileSelector.x += 1;
        }
        break;

      case "Space":

        let vacant = true;

        if (elementToBuild === "gun") {
          for (gun of this.game.city.gunsArray) {
            if (gun.y == this.tileSelector.y) {
              vacant = false;
            }
          }
          if (vacant) {
            this.createGun(this.game, this.tileSelector.x, this.tileSelector.y);

            console.log("entra")
          }
        } else if (elementToBuild === "building") {
          for (building of this.game.city.buildingsArray) {
            if (building.y == this.tileSelector.y && building.x == this.tileSelector.x) {
              vacant = false;
            }
          }
          if (vacant) {
            this.createBuilding(this.game, this.tileSelector.x, this.tileSelector.y);
          }
        }
        this.tileSelector = {};
        window.removeEventListener("keydown", choosePos);
        button.disabled = false;
        break;

    }
  }
  window.addEventListener("keydown", choosePos)
}





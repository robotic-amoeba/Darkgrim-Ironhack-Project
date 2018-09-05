
function Player(game) {
  this.game = game;
  this.points = 0;
  this.money = 200;
  this.tileSelector = {};
}



Player.prototype.createGun = function (game, x, y) {
  if (this.money >= this.game.city.gunPrice) {

    let gun = new Gun(game, x, y);
    this.game.city.gunsArray.push(gun);
    this.money -= this.game.city.gunPrice;

  } else {

    console.log("Not enough money")
  }
}


Player.prototype.createLaser = function (game, x, y) {

  if (this.money >= this.game.city.laserPrice) {
    let laser = new Laser(game, x, y);
    this.game.city.gunsArray.push(laser);
    this.money -= this.game.city.laserPrice;
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



Player.prototype.upgradeGun = function(x, y) {

  this.game.city.gunsArray.forEach(function(weapon) {

    if (x === weapon.x && y === weapon.y) {
      let laser = new Laser(this.game, x, y);
      this.game.city.gunsArray.splice(this.game.city.gunsArray.indexOf(weapon), 1, laser);
    }
  }.bind(this))

}



Player.prototype.placeSelector = function (buttons, elementToBuild) {

  for (let button of buttons) {
    button.disabled = true;
  }
  if (elementToBuild == "gun" || elementToBuild == "laser" || elementToBuild == "upgrade") {
    this.tileSelector = { x: 14, y: 0 }
  } else if (elementToBuild === "building") {
    this.tileSelector = { x: 15, y: 0 }
  }

  const choosePos = event => {

    switch (event.code) {

      case "ArrowDown":
        if (this.tileSelector.y < 9) {
          this.tileSelector.y += 1;
        }
        break;

      case "ArrowUp":
        if (this.tileSelector.y > 0) {
          this.tileSelector.y -= 1;
        }
        break;

      case "ArrowLeft":
        if (elementToBuild === ("building") && this.tileSelector.x > 15) {
          this.tileSelector.x -= 1;
        }
        break;

      case "ArrowRight":
        if (elementToBuild === ("building") && this.tileSelector.x < 19) {
          this.tileSelector.x += 1;
        }
        break;

      case "Space":
        if (elementToBuild != "building" && this.checkIfVacant(this.game.city.gunsArray)) {
          this.whatToCreate(elementToBuild);
        } else if (elementToBuild == "building" && this.checkIfVacant(this.game.city.buildingsArray)) {
          this.whatToCreate(elementToBuild);
        } else {
          this.whatToCreate(elementToBuild);
        }

        this.tileSelector = {};
        for (let button of buttons) {
          button.disabled = false;
        }
        window.removeEventListener("keydown", choosePos);
        break;

    }
  }
  window.addEventListener("keydown", choosePos)
}



Player.prototype.checkIfVacant = function (array) {

  let vacantBool = true;
  array.forEach(function (element) {
    if (element.y == this.tileSelector.y && element.x == this.tileSelector.x) {
      vacantBool = false;
    }
  }.bind(this));
  return vacantBool;
}



Player.prototype.whatToCreate = function (option) {

  if (option == "laser") {
    this.createLaser(this.game, this.tileSelector.x, this.tileSelector.y);
  } else if (option == "gun") {
    this.createGun(this.game, this.tileSelector.x, this.tileSelector.y);
  } else if (option = "upgrade") {
    this.upgradeGun(this.tileSelector.x, this.tileSelector.y);
  }
}





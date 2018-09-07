
function Player(game) {
  this.game = game;
  this.points = 0;
  this.money = 300;
  this.tileSelector = {};
}



Player.prototype.createGun = function (game, x, y) {

  if (this.money >= this.game.city.gunPrice) {
    let gun = new Gun(game, x, y);
    this.game.city.gunsArray.push(gun);
    this.money -= this.game.city.gunPrice;
  } else {
    console.log("Not enough money");
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



Player.prototype.createBuilding = function (game, x, y) {

  if (this.money >= this.game.city.buildPrice) {
    let building = new Building(game, x, y);
    this.game.city.buildingsArray.push(building);
    this.money -= this.game.city.buildPrice;
  } else {
    console.log("Not enogh money");
  }
}



Player.prototype.upgradeGun = function (option, x, y) {

  this.game.city.gunsArray.forEach(function (weapon) {

    if (x === weapon.x && y === weapon.y) {
      if (option == "upgrade" && this.money >= this.game.city.upgradeGunPrice) {
        let laser = new Laser(this.game, x, y);
        this.game.city.gunsArray.splice(this.game.city.gunsArray.indexOf(weapon), 1, laser);
        this.money -= this.game.city.upgradeGunPrice;
      } else if ("upgradeDMG" && this.money >= this.game.city.upgradeGunDMG) {
        weapon.damage += 5;
        this.money -= this.game.city.upgradeGunDMG;

      }
    }
  }.bind(this))

}


Player.prototype.placeSelector = function (buttons, elementToBuild) {

  for (let button of buttons) {
    button.disabled = true;
  }
  if (elementToBuild === "building") {
    this.tileSelector = { x: 15, y: 0 }
  } else {
    this.tileSelector = { x: 14, y: 0 }
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
        if (elementToBuild === ("building") && this.tileSelector.x < 17) {
          this.tileSelector.x += 1;
        }
        break;

      case "Escape":
        this.tileSelector = {};
        for (let button of buttons) {
          button.disabled = false;
        }
        window.removeEventListener("keydown", choosePos);
        break;

      case "Space":
        if (elementToBuild == "upgrade" || elementToBuild == "upgradeDMG") {
          this.whatToCreate(elementToBuild);
        } else if (elementToBuild == "building" && this.checkIfVacant(this.game.city.buildingsArray)) {
          this.whatToCreate(elementToBuild);
        } else if ((elementToBuild == "gun" || elementToBuild == "laser") && this.checkIfVacant(this.game.city.gunsArray)) {
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
  } else if (option == "upgrade" || option == "upgradeDMG") {
    this.upgradeGun(option, this.tileSelector.x, this.tileSelector.y);
  } else {
    this.createBuilding(this.game, this.tileSelector.x, this.tileSelector.y)
  }
}

Player.prototype.drawTileSelector = function () {

  this.game.ctx.save();
  this.game.ctx.fillStyle = "rgba(241, 204, 204, 0.3)";
  this.game.ctx.fillRect(this.tileSelector.x * TILE_WIDTH, this.tileSelector.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  this.game.ctx.restore();
}





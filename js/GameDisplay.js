
function GameDisplay(game) {
  this.game = game;
  this.map = [];
  this.mapConstructor();

}



GameDisplay.prototype.mapConstructor = function () {

  for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 20; j++) {
      this.map.push([j, i]);
    }
  }

}

let bulletImage = new Image();
bulletImage.src = "./img/bullet.png"

let background = new Image();
background.src = "./img/dirt-background.png";

let cityBackground = new Image();
cityBackground.src = "./img/concrete.png";

let cityBackgroundGrass = new Image();
cityBackgroundGrass.src = "./img/Grass-ground.png";

let roofsImage = new Image();
roofsImage.src = "./img/roofs.png";

let wallImage = new Image();
wallImage.src = "./img/wall.png";

let siloImage = new Image();
siloImage.src = "./img/silo.png"

let laserImage = new Image();
laserImage.src = "./img/laser.png";

let laserGunImage = new Image();
laserGunImage.src = "./img/laserGun.png";

let gunImage = new Image();
gunImage.src = "./img/gun.png"

let bugFrame1 = new Image();
let bugFrame2 = new Image();
let bugFrame3 = new Image();

bugFrame1.src = "./img/bugFrame1.png";
bugFrame2.src = "./img/bugFrame2.png";
bugFrame3.src = "./img/bugFrame3.png";

let carnibugFrame1 = new Image();
let carnibugFrame2 = new Image();
let carnibugFrame3 = new Image();

carnibugFrame1.src = "./img/carnibugFrame1.png";
carnibugFrame2.src = "./img/carnibugFrame2.png";
carnibugFrame3.src = "./img/carnibugFrame3.png";




GameDisplay.prototype.paintMap = function (tileSelector, gunsArray, buildingsArray, bugsArray) {

  const ctx = this.game.gameBoard;

  //TERRAIN

  for (elm of this.map) { //all map
    ctx.drawImage(background, elm[0] * TILE_WIDTH, elm[1] * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  for (let i = 0; i < 10; i++) {
    ctx.drawImage(cityBackground, 17 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH * 2, TILE_HEIGHT *2);
    ctx.drawImage(roofsImage, 18 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH*2, TILE_HEIGHT)*2;
  }
  ctx.drawImage(cityBackgroundGrass, 17 * TILE_WIDTH,  0, TILE_WIDTH, TILE_HEIGHT);
  ctx.drawImage(cityBackgroundGrass, 17 * TILE_WIDTH,  5 * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);

  


  //WALL

  for (let i = 0; i < 10; i++) {
    ctx.drawImage(wallImage, 14 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  //BUILDINGS

  if (buildingsArray) {
    for (building of buildingsArray) {
      ctx.drawImage(siloImage, building.x * TILE_WIDTH, building.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
    }

  }

  //GUNS

  if (gunsArray) {

    for (gun of gunsArray) {
      if (gun.type === "gun") {
        ctx.drawImage(gunImage, gun.x * TILE_WIDTH, gun.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
      } else if (gun.type == "laser")
        ctx.drawImage(laserGunImage, gun.x * TILE_WIDTH, gun.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
    }

    //PROJECTILES    

    for (bullet of this.game.bullets) {

      if (bullet.type === "bullet") {
        ctx.drawImage(bulletImage, bullet. x + 10, bullet.y + 30, 27, 15);
      } else if (bullet.type === "laserbeam") {
        ctx.drawImage(laserImage, 0, bullet.y + 33, 988, 5);
      }
    }
  }

  //POSITION SELECTOR 

  if (tileSelector) {
    ctx.save();
    ctx.fillStyle = "rgb(241, 204, 204)";
    ctx.fillRect(tileSelector.x * TILE_WIDTH, tileSelector.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
    ctx.restore();

  }

  //BUGS

  if (bugsArray) {
    for (bug of bugsArray) {

      if (bug.brood === "bug") {
        if (bug.frame === 1) {
          ctx.drawImage(bugFrame2, bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        } else if (bug.frame === 2) {
          ctx.drawImage(bugFrame3, bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        } else {
          ctx.drawImage(bugFrame1, bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        }
      } else {
        if (bug.frame === 1) {
          ctx.drawImage(carnibugFrame1, bug.x - 40, bug.y, 117, 76);
        } else if (bug.frame === 2) {
          ctx.drawImage(carnibugFrame2, bug.x - 40, bug.y, 117, 76);
        } else {
          ctx.drawImage(carnibugFrame3, bug.x - 40, bug.y, 117, 76);
        }
      }

      //life bar

      ctx.save();
      ctx.fillStyle = "rgb(10, 250, 80)";
      ctx.fillRect(bug.x, bug.y + 10, bug.health * TILE_WIDTH / bug.fixedHealth, 10);
      ctx.strokeStyle = "rgb(0, 0, 0)";
      ctx.strokeRect(bug.x, bug.y + 10, TILE_WIDTH, 10);
      ctx.restore();

    }
  }
}

GameDisplay.prototype.displayStatus = function () {
  this.game.moneyTag.innerHTML = "$" + this.game.player.money;
}

const TILE_WIDTH = 70; //70px
const TILE_HEIGHT = 70;




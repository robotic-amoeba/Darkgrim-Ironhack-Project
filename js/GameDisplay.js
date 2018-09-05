
function GameDisplay(game) {
  this.game = game;
  this.map = [];
  this.mapConstructor();
  
}



GameDisplay.prototype.mapConstructor = function() {

  for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 20; j++) {
      this.map.push([j, i]);
    }
  }

}


let background = new Image();
background.src = "./img/Grass-ground.png";

let wallImage = new Image();
wallImage.src = "./img/wall.png";

let laserImage = new Image();
laserImage.src = "./img/laser.png";

let bugFrame1 = new Image();
let bugFrame2 = new Image();
let bugFrame3 = new Image();

bugFrame1.src = "./img/bugFrame1.png";
bugFrame2.src = "./img/bugFrame2.png";
bugFrame3.src = "./img/bugFrame3.png";



GameDisplay.prototype.paintMap = function (tileSelector, gunsArray, buildingsArray, bugsArray) {

  //TERRAIN

  for (elm of this.map) { //all map
    this.game.gameBoard.drawImage(background, elm[0] * TILE_WIDTH, elm[1] * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  //WALL

  for (let i = 0; i < 14; i++) {
    this.game.gameBoard.drawImage(wallImage, 14 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  //BUILDINGS

  if (buildingsArray) {
    for (building of buildingsArray) {

      this.game.gameBoard.save();
      this.game.gameBoard.fillStyle = "rgb(86, 87, 71)";
      this.game.gameBoard.fillRect(building.x * TILE_WIDTH, building.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
      this.game.gameBoard.restore();
    }

  }

  //GUNS

  if (gunsArray) {

    for (gun of gunsArray) {

      this.game.gameBoard.save();
      this.game.gameBoard.fillStyle = "rgb(86, 87, 71)";
      this.game.gameBoard.fillRect(gun.x * TILE_WIDTH, gun.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
      this.game.gameBoard.restore();

    }
    
    //PROJECTILES    

    for (bullet of this.game.bullets) {

        if (gun.type === "gun") {

          this.game.gameBoard.save();
          this.game.gameBoard.beginPath();
          this.game.gameBoard.fillStyle = "rgb(0, 0, 0)";
          this.game.gameBoard.arc(bullet.x + 35, bullet.y + 35, bullet.r, 0, Math.PI * 2);
          this.game.gameBoard.fill();
          this.game.gameBoard.closePath();
          this.game.gameBoard.restore();

        } else if (gun.type === "laser") {

         // this.game.gameBoard.drawImage(bugFrame1, 0, gun.y + 25, gun.x, gun.y +10);


      }
    }
  }

  //POSITION SELECTOR 
  if (tileSelector) {

    this.game.gameBoard.save();
    this.game.gameBoard.fillStyle = "rgb(241, 204, 204)";
    this.game.gameBoard.fillRect(tileSelector.x * TILE_WIDTH, tileSelector.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
    this.game.gameBoard.restore();

  }

  //BUGS

  if (bugsArray) {
    for (bug of bugsArray) {

      if (bug.brood === "bug") {

        if (bug.frame === 1) {
          this.game.gameBoard.drawImage(bugFrame2, bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        } else if (bug.frame === 2) {
          this.game.gameBoard.drawImage(bugFrame3, bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        } else {
          this.game.gameBoard.drawImage(bugFrame1, bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        }

      } else {

        this.game.gameBoard.save();
        this.game.gameBoard.fillStyle = "rgb(179, 227, 64)";
        this.game.gameBoard.fillRect(bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        this.game.gameBoard.restore();
      }

      //life bar

      this.game.gameBoard.save();
      this.game.gameBoard.fillStyle = "rgb(10, 250, 80)";
      this.game.gameBoard.fillRect(bug.x, bug.y + 10, bug.health * TILE_WIDTH / bug.fixedHealth, 10);
      this.game.gameBoard.strokeStyle = "rgb(0, 0, 0)";
      this.game.gameBoard.strokeRect(bug.x, bug.y + 10, TILE_WIDTH, 10);
      this.game.gameBoard.restore();

    }
  }


}

GameDisplay.prototype.displayStatus = function () {
  this.game.moneyTag.innerHTML = "$" + this.game.player.money;

}

const TILE_WIDTH = 70; //70px
const TILE_HEIGHT = 70;




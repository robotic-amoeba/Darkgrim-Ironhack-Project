
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


GameDisplay.prototype.paintMap = function (tileSelector, gunsArray, buildingsArray, bugsArray) {


  //TERRAIN

  let background = new Image();
  background.src = "./img/Grass-ground.png";
  for (elm of this.map) { //all map
    this.game.gameBoard.drawImage(background, elm[0] * TILE_WIDTH, elm[1] * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }



  //WALL

  let wallImage = new Image();
  wallImage.src = "./img/wall.png";
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

          this.game.gameBoard.save();
          this.game.gameBoard.beginPath();
          this.game.gameBoard.fillStyle = "rgb(0, 0, 0)";
          this.game.gameBoard.arc(bullet.x + 35, bullet.y + 35, bullet.r, 0, Math.PI * 2);
          this.game.gameBoard.fill();
          this.game.gameBoard.closePath();
          this.game.gameBoard.restore();
        }


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

      this.game.gameBoard.save();
      this.game.gameBoard.fillStyle = "rgb(179, 227, 64)";
      this.game.gameBoard.fillRect(bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
      this.game.gameBoard.restore();
      this.game.gameBoard.save();
    }
  }


}

GameDisplay.prototype.displayStatus = function () {
  this.game.moneyTag.innerHTML = "$" + this.game.player.money;

}

const TILE_WIDTH = 70; //70px
const TILE_HEIGHT = 70;




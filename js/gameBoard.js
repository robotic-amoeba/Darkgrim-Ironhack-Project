
const TILE_WIDTH = 70; //70px
const TILE_HEIGHT = 70; 
var map = [];


function mapConstructor() { //[x, y]
  for (let i = 0; i < 10; i++ ) { 

    for (let j = 0; j<20; j++) {
      map.push([j, i]);
      /* map[j][].push(j);  
      map[j].push(i); */
    }
  }
}


function GameDisplay() {  
  
  this.canvas = document.getElementById("game-board");
  this.gameBoard = this.canvas.getContext("2d");
  
}



GameDisplay.prototype.paintMap = function() {

  this.gameBoard.save();

  this.gameBoard.fillStyle = "rgb(125, 128, 70)";
  //gameBoard.fillRect(0, 0 , 400, 700)
  for (elm of map) { //all map
    this.gameBoard.fillRect(elm[0]*TILE_WIDTH, elm[1]*TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  this.gameBoard.restore();
}

GameDisplay.prototype.drawWall = function () {

  this.gameBoard.save();
  this.gameBoard.fillStyle = "rgb(70, 60, 60)";
  this.gameBoard.fillRect(14 * TILE_WIDTH, 0, TILE_WIDTH, 10 * TILE_HEIGHT);
  this.gameBoard.restore();
}


GameDisplay.prototype.drawRailgun = function(x, y) {
  
  this.gameBoard.save();
  this.gameBoard.fillStyle = "rgb(86, 87, 71)";
  this.gameBoard.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
  this.gameBoard.restore();
  
}

GameDisplay.prototype.drawProjectiles = function(bullet) {

  this.gameBoard.save();
  this.gameBoard.beginPath();
  this.gameBoard.fillStyle = "rgb(0, 0, 0)";
  this.gameBoard.arc(bullet.x + 35, bullet.y + 35, bullet.r, 0, Math.PI * 2);
  this.gameBoard.fill();
  this.gameBoard.closePath();
  this.gameBoard.restore();
}


  



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

//----------------------------------------------------------------

GameDisplay.prototype.paintMap = function(gunArray, bugArray) {

  //TERRAIN

  this.gameBoard.save();

  this.gameBoard.fillStyle = "rgb(125, 128, 70)";
  
  for (elm of map) { //all map
    this.gameBoard.fillRect(elm[0]*TILE_WIDTH, elm[1]*TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  this.gameBoard.restore();


  //WALL

  this.gameBoard.save();
  this.gameBoard.fillStyle = "rgb(70, 60, 60)";
  this.gameBoard.fillRect(14 * TILE_WIDTH, 0, TILE_WIDTH, 10 * TILE_HEIGHT);
  this.gameBoard.restore();

  
  //GUNS
  
  if (gunArray) {

    for (gun of gunArray) {
      
      this.gameBoard.save();
      this.gameBoard.fillStyle = "rgb(86, 87, 71)";
      this.gameBoard.fillRect(gun.x, gun.y, TILE_WIDTH, TILE_HEIGHT);
      this.gameBoard.restore();
      this.gameBoard.save();

      for (bullet of gun.bullets) {

        this.gameBoard.beginPath();
        this.gameBoard.fillStyle = "rgb(0, 0, 0)";
        this.gameBoard.arc(bullet.x + 35, bullet.y + 35, bullet.r, 0, Math.PI * 2);
        this.gameBoard.fill();
        this.gameBoard.closePath();
        this.gameBoard.restore();
      }
    }
  }

  //BUGS
  
  if (bugArray) {
    for (bug of bugArray) {

      this.gameBoard.save();
        this.gameBoard.fillStyle = "rgb(179, 227, 64)";
        this.gameBoard.fillRect(bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        this.gameBoard.restore();
        this.gameBoard.save();
    }
  }
    

}
    


  


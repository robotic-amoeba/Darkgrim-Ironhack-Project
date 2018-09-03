
function GameDisplay(game) {  
  this.game = game;
  this.map = [];
  this.mapConstructor();
}


GameDisplay.prototype.mapConstructor = function() {
  
  for (let i = 0; i < 10; i++ ) { 
  
    for (let j = 0; j<20; j++) {
      this.map.push([j, i]);
      /* map[j][].push(j);  
      map[j].push(i); */
    }
  }
  
}


GameDisplay.prototype.paintMap = function(gunPosition, gunArray, bugArray) {

  //TERRAIN

  this.game.gameBoard.save();
  this.game.gameBoard.fillStyle = "rgb(125, 128, 70)";
  
  for (elm of this.map) { //all map
    this.game.gameBoard.fillRect(elm[0]*TILE_WIDTH, elm[1]*TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  this.game.gameBoard.restore();


  //WALL

  this.game.gameBoard.save();
  this.game.gameBoard.fillStyle = "rgb(70, 60, 60)";
  this.game.gameBoard.fillRect(14 * TILE_WIDTH, 0, TILE_WIDTH, 10 * TILE_HEIGHT);
  this.game.gameBoard.restore();

  
  //GUNS
  
  if (gunArray) {
    for (gun of gunArray) {
      
      this.game.gameBoard.save();
      this.game.gameBoard.fillStyle = "rgb(86, 87, 71)";
      this.game.gameBoard.fillRect(gun.x * TILE_WIDTH, gun.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
      this.game.gameBoard.restore();
  
      
      for (bullet of this.game.bullets) {
        
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
  
  //GUN PREPOSITION 
  if (gunPosition) {

    this.game.gameBoard.save();
    this.game.gameBoard.fillStyle = "rgb(241, 204, 204)";
    this.game.gameBoard.fillRect(gunPosition.x * TILE_WIDTH, gunPosition.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
    this.game.gameBoard.restore();
    
  }


  //BUGS
  
  if (bugArray) {
    for (bug of bugArray) {
      
      this.game.gameBoard.save();
      this.game.gameBoard.fillStyle = "rgb(179, 227, 64)";
      this.game.gameBoard.fillRect(bug.x, bug.y, TILE_WIDTH, TILE_HEIGHT);
        this.game.gameBoard.restore();
        this.game.gameBoard.save();
    }
  }
    

}
    
const TILE_WIDTH = 70; //70px
const TILE_HEIGHT = 70; 

  


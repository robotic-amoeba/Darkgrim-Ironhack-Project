
window.onload = function() {  
  
  var gameBoard;
  var canvas = document.getElementById("game-board");
  gameBoard = canvas.getContext("2d");
  
}

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



function paintMap() {

  gameBoard.save();

  gameBoard.fillStyle = "rgb(125, 128, 70)";
  //gameBoard.fillRect(0, 0 , 400, 700)
  for (elm of map) { //all map
    gameBoard.fillRect(elm[0]*TILE_WIDTH, elm[1]*TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  gameBoard.restore();
}

function drawWall() {

  gameBoard.save();
  gameBoard.fillStyle = "rgb(70, 60, 60)";
  gameBoard.fillRect(14 * TILE_WIDTH, 0, TILE_WIDTH, 10 * TILE_HEIGHT);
  gameBoard.restore();
}


function drawRailgun(x, y) {
  
  gameBoard.save();
  gameBoard.fillStyle = "rgb(86, 87, 71)";
  gameBoard.fillRect(x, y, TILE_WIDTH, TILE_HEIGHT);
  gameBoard.restore();
  
}

  


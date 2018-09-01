window.onload = function() {

var gameDisplay = new GameDisplay();

mapConstructor();
gameDisplay.paintMap();
gameDisplay.drawWall();
gameMain(gameDisplay);

}


function gameMain(gameDisplay) {

  /* const TILE_WIDTH = 70; //70px
  const TILE_HEIGHT = 70;
  */
  
  function Railgun(x, y) { //x and y are tile numbers
    this.x = x *  TILE_WIDTH;
    this.y = y * TILE_HEIGHT;
    this.shoot_rate = 5;
    this.range = 5;
  }
  
  function createGun(x, y) {  //canon, laser
    
    var railGun = new Railgun (x, y);
    console.log(railGun);
    gameDisplay.drawRailgun(railGun.x, railGun.y);
  }
  

  var gunArray = [];
  var gunButton = document.getElementsByClassName("turret")[0];
  gunButton.onclick = function() {
    
    var gun = createGun(14, gunArray.length);
    gunArray.push(gun);
  }



}







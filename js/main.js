

/* const TILE_WIDTH = 70; //70px
const TILE_HEIGHT = 70;
*/

function Railgun(x, y) { //x and y are tile numbers
  this.x = x *  TILE_WIDTH;
  this.y = y * TILE_HEIGHT;
  this.shoot_rate = 5;
  this.range = 5;
}

function createGun() {  //canon, laser

  var railGun = new Railgun (14, 1);
  drawRailgun(railGun.x, railGun.y);
}

mapConstructor();
paintMap();
drawWall();
drawRailgun(20, 40);




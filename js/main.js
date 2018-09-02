window.onload = function() {

var gameDisplay = new GameDisplay();

mapConstructor();
gameDisplay.paintMap();
gameDisplay.drawWall();
gameMain(gameDisplay);

}


function gameMain(gameDisplay) {

  //GUN--------------------------------------------------------
  
  function Railgun(x, y) { //x and y are tile numbers
    this.x = x *  TILE_WIDTH;
    this.y = y * TILE_HEIGHT;
    this.bullets = [];
    this.fireRate = 2000;
    this.range = 5;
  }
  
  var gunArray = [];
  function createGun(x, y) {  //canon, laser
    
    var railGun = new Railgun (x, y);

    gunArray.push(railGun);
    console.log(gunArray);

    gameDisplay.drawRailgun(railGun.x, railGun.y);
    railGun.shoot();
  }
  

  var gunButton = document.getElementsByClassName("turret")[0];
  gunButton.onclick = function() {
    
    var gun = createGun(14, gunArray.length);
  }

  //PROJECTILES-------------------------------------------------------
  
  
  function Projectile(x, y) {
  
    this.x = x;
    this.y = y;
    this.r = 5;
  }
  
  
  Railgun.prototype.shoot = function() { //sets new projectiles
    var self = this;
    
    setInterval(function() {

      var bullet = new Projectile(self.x, self.y);  // DEBUG SELF.X UNDEFINED
      self.bullets.push(bullet);
      console.log("shoot");

    }, this.fireRate)  
  }

moveProjectiles();
  function moveProjectiles() { //moves array of projectiles of each gun
    
    setInterval(function(){
    
      for (gun of gunArray) {

        for (bullet of gun.bullets){
          
          if (bullet.x < -30) {
    
            gun.bullets.splice(bullet);
    
          } else {
    
            bullet.x -= 10;
            gameDisplay.paintMap();
            gameDisplay.drawWall();
            gameDisplay.drawRailgun(self.x, self.y);
            gameDisplay.drawProjectiles(bullet);
          }
        }
      }
    }, 10)
  }

}







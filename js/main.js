window.onload = function() {
  
  var gameDisplay = new GameDisplay();
  
  mapConstructor();
  gameMain(gameDisplay);
  
}


function gameMain(gameDisplay) {

  internalClock();
  
  function internalClock() {
    setInterval(function(){
      
      
      moveProjectiles();
      moveBugs();
      gameDisplay.paintMap(gunArray, bugArray);
      
    }, 40)
  }
  
  //GUNs--------------------------------------------------------
  
  var gunArray = [];
  
  
  function Railgun(x, y) { //x and y are tile numbers
    this.x = x *  TILE_WIDTH;
    this.y = y * TILE_HEIGHT;
    this.bullets = [];
    this.fireRate = 1000;
    this.range = 5;
  }
  
  
  Railgun.prototype.shoot = function() { //generates new projectiles
    var self = this;
    
    setInterval(function() {
      
      var bullet = new Projectile(self.x, self.y);
      self.bullets.push(bullet);
      console.log("shoot");
      
    }, this.fireRate)  
  }
  
  
  function createGun(x, y) {  //canon, laser
    
    var railGun = new Railgun (x, y);
    
    gunArray.push(railGun);
    console.log(gunArray);
    railGun.shoot();
    spawnBug();                    //  <----------------------------
  }
  
  var gunButton = document.getElementsByClassName("turret")[0];
  gunButton.onclick = function() {  
    var gun = createGun(14, gunArray.length);
  }
  

  //PROJECTILES-------------------------------------------------------
  
  
  function Projectile(x, y) {
  
    this.x = x;
    this.y = y;
    this.r = 3;
    this.speed = 30;
  }
  
  function moveProjectiles() { //moves array of projectiles of each gun
      
    for (gun of gunArray) {

      for (bullet of gun.bullets){

        bullet.x -= bullet.speed;
      
      }
    }
  }

  //BUGS

  var bugArray = [];

  function Bug(x, y) {

    this.x = x;
    this.y = y;
    this.speed = 1;
    this.health = 100;
    this.spawnTime = 5000;
  }


  function spawnBug() {

    var randomYtile = Math.floor((Math.random() * 10));
    var bug = new Bug(0, randomYtile * TILE_HEIGHT);
    bugArray.push(bug);
  }

  function moveBugs() {
    for (bug of bugArray) {
      bug.x += bug.speed;
    }
  }


}







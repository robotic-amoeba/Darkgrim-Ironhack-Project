

function GameMain(canvas) {

  this.canvas = document.getElementById(canvas);
  this.gameBoard = this.canvas.getContext("2d");

  this.fps = 60;
  this.newGame();
  
}


GameMain.prototype.newGame = function(){
  this.gameDisplay = new GameDisplay(this);
  this.player = new Player(this);
  this.bugArray = [];
  this.bullets = [];
}


GameMain.prototype.startClock = function () {

  let clock = 0

  this.clock = setInterval(function () {
    
    clock ++;

    if (clock % 240 === 0) {
      this.spawnBug();
    }


    if (this.bugArray) {
      for (let bug of this.bugArray) {
        bug.moveBug(bug);
      }
      
      for (let gun of this.player.gunArray) {
        if (clock % gun.fireRate === 0)
          gun.shoot();
      }
    }
      
    if (this.bullets) {

      for (bullet of this.bullets) {
        this.moveProjectiles(bullet);
        this.detectCollisions(bullet);
      }
    }

    this.gameDisplay.paintMap(this.player.gunPosition, this.player.gunArray, this.bugArray);

  }.bind(this), 1000 / this.fps)
}


GameMain.prototype.spawnBug = function () {

  let randomYtile = Math.floor((Math.random() * 10));
  let bug = new Bug(this.game, 0, randomYtile * TILE_HEIGHT);
  this.bugArray.push(bug);
}


GameMain.prototype.moveProjectiles = function (bullet) { //moves array of projectiles of each gun

  bullet.x -= bullet.speed;
}


GameMain.prototype.detectCollisions = function (bullet) {

  let bug;

  for (let i = 0; i < this.bugArray.length; i++) {

    bug = this.bugArray[i];

    if (bug.x + TILE_WIDTH >= bullet.x &&
      bullet.x + TILE_WIDTH >= bug.x && bullet.y == bug.y) {

      bug.health -= bullet.damage;
      this.bullets.splice(this.bullets.indexOf(bullet), 1);
      console.log(bug.health)
      if (bug.health <= 0) {
        this.bugArray.splice(this.bugArray.indexOf(bug), 1);
      }
    }
  }

}








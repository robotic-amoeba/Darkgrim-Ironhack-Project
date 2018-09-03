

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


  this.clock = setInterval(function () {
    

    if (this.bugArray) {
      for (bug of bugArray) {
        bug.moveBugs();
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
  let bug = new Bug(0, randomYtile * TILE_HEIGHT);
  this.bugArray.push(bug);
}


GameMain.prototype.moveProjectiles = function (bullet) { //moves array of projectiles of each gun

  bullet.x -= bullet.speed;
}


GameMain.prototype.detectCollisions = function (bullet) {

  let bug;

  for (let i = 0; i < bugArray.length; i++) {

    bug = bugArray[i];

    if (bug.x + TILE_WIDTH >= bullet.x &&
      bullet.x + TILE_WIDTH >= bug.x && bullet.y == bug.y) {

      //gunArray.splice(gunArray.indexOf(bullet), 1);
      bug.health -= bullet.damage;

      if (bug.health <= 0) {
        bugArray.splice(bugArray.indexOf(bug), 1);
      }
    }
  }

}








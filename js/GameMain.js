

function GameMain(canvas) {

  this.canvas = document.getElementById(canvas);
  this.gameBoard = this.canvas.getContext("2d");

  this.fps = 60;
  this.moneyTag;
  this.buildingButton;
  this.newGame();

}


GameMain.prototype.newGame = function () {
  this.gameDisplay = new GameDisplay(this);
  this.player = new Player(this);
  this.city = new City(this);
  this.bugsArray = [];
  this.bullets = [];
}


GameMain.prototype.startClock = function () {

  let clock = 0

  this.clock = setInterval(function () {

    clock++;

    if (clock % 30 === 0) {
      this.player.money += 1;
      this.gameDisplay.displayStatus();
    }

    if (clock % 300 === 0) {
      this.spawnBug();
    }

    if (clock % 30 === 0 && this.city.buildingsArray) {
      for (let building of this.city.buildingsArray) {
        building.generateProfit(building);
      }
    }


    if (this.bugsArray) {
      for (let bug of this.bugsArray) {
        if (bug.x >= 13 * TILE_WIDTH) {
          bug.attack();
        } else {
          bug.moveBug(bug);
        }

      }
      if (this.city.gunsArray) {
        for (let gun of this.city.gunsArray) {
          if (clock % gun.fireRate === 0)
            gun.shoot();
        }
      }
    }

    if (this.bullets) {

      for (bullet of this.bullets) {
        this.moveProjectiles(bullet);
        this.detectCollisions(bullet);
      }

      this.eraseBullets();
    }

    this.gameDisplay.paintMap(this.player.gunPosition, this.player.buildingPosition,
                               this.city.gunsArray, this.city.buildingsArray, this.bugsArray);

  }.bind(this), 1000 / this.fps)
}


GameMain.prototype.spawnBug = function () {

  let randomYtile = Math.floor((Math.random() * 10));
  let bug = new Bug(this, 0, randomYtile * TILE_HEIGHT);
  this.bugsArray.push(bug);
}


GameMain.prototype.moveProjectiles = function (bullet) { //moves array of projectiles of each gun

  bullet.x -= bullet.speed;
}


GameMain.prototype.eraseBullets = function() {

  if (this.bullets.length > 0) {console.log(this.bullets)}
  
  this.bullets = this.bullets.filter (bullet => bullet.x > -10)
}


GameMain.prototype.detectCollisions = function (bullet) {

  let bug;

  for (let i = 0; i < this.bugsArray.length; i++) {

    bug = this.bugsArray[i];

    if (bug.x + TILE_WIDTH >= bullet.x &&
      bullet.x + TILE_WIDTH >= bug.x && bullet.y == bug.y) {

      bug.health -= bullet.damage;
      this.bullets.splice(this.bullets.indexOf(bullet), 1);
      if (bug.health <= 0) {
        this.bugsArray.splice(this.bugsArray.indexOf(bug), 1);
      }
    }
  }

}








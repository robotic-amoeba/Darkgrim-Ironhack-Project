

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

  let seconds;
  seconds = this.clock / 60;

  this.clock = setInterval(function () {

    this.clock++;

    if (this.clock % 30 === 0) {
      this.player.money += 1;
      if (this.city.buildingsArray) {
        for (let building of this.city.buildingsArray) {
          building.generateProfit(building);
        }
      }
      this.gameDisplay.displayStatus();
    }

    if ( this.clock > 60 && this.clock % 300 === 0) {
      this.spawnBug();
    }


    if (this.bugsArray) {
      for (let bug of this.bugsArray) {
        if (bug.x >= 13 * TILE_WIDTH) {
          bug.attack();
        } else {
          bug.moveBug();
          bug.moveFrame();

        }
      }
      if (this.city.gunsArray) {
        for (let weapon of this.city.gunsArray) {
          if (this.clock % weapon.fireRate === 0)
            weapon.shoot();
        }
      }
    }

    if (this.bullets) {
      for (bullet of this.bullets) {
        bullet.moveProjectile();
        this.detectCollisions(bullet);
      }
      this.eraseBullets();
    }

    this.gameDisplay.paintMap(this.player.tileSelector, this.city.gunsArray,
      this.city.buildingsArray, this.bugsArray);

  }.bind(this), 1000 / this.fps)
}


GameMain.prototype.spawnBug = function () {

  let randomYtile = Math.floor((Math.random() * 10));

  if (this.clock % 2400 === 0) {
    let carniBug = new CarniBug(this, 0, randomYtile * TILE_HEIGHT);
    this.bugsArray.push(carniBug);
  } else {
    let bug = new Bug(this, 0, randomYtile * TILE_HEIGHT);
    this.bugsArray.push(bug);
  }
}


GameMain.prototype.moveProjectiles = function (bullet) { //moves array of projectiles of each gun

  bullet.x -= bullet.speed;
}


GameMain.prototype.eraseBullets = function () {

  this.bullets = this.bullets.filter(bullet => bullet.x > -10)
}


GameMain.prototype.detectCollisions = function (bullet) {

  let bug;

  for (let i = 0; i < this.bugsArray.length; i++) {
    bug = this.bugsArray[i];
    if (bug.x + TILE_WIDTH >= bullet.x &&
      bullet.x + TILE_WIDTH >= bug.x && bullet.y == bug.y) {
      bug.health -= bullet.damage;
      console.log(bullet)
      this.bullets.splice(this.bullets.indexOf(bullet), 1);
      if (bug.health <= 0) {
        this.bugsArray.splice(this.bugsArray.indexOf(bug), 1);
      }
    }
  }

}








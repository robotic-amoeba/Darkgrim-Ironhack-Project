
function GameMain(canvas) {

  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");
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
  this.deadBugs = [];
}

GameMain.prototype.startClock = function () {

  let seconds;
  seconds = this.clock / 60;

  this.clock = setInterval(function () {

    this.clock++;

    //GAME STATUS

    if (this.clock % 30 === 0) {
      this.player.money += 2;
      if (this.city.buildingsArray) {
        for (let building of this.city.buildingsArray) {
          building.generateProfit();
        }
      }
      this.gameDisplay.displayStatus();
    }

    if (this.clock > 60 && this.clock % 300 === 0) {
      this.spawnBug();
    }


    //PAINT TERRAIN AND CITY

    this.gameDisplay.paintMap();

    //BUGS AND SHOOT

    if (this.deadBugs) {
      this.deadBugs.forEach(function () {
        this.drawBlood();
      }.bind(this))
    }

    if (this.bugsArray) {
      for (let bug of this.bugsArray) {
        if (bug.x >= 13 * TILE_WIDTH) {
          bug.attack();
          bug.drawBug();
        } else {
          bug.moveBug();
          bug.moveFrame();
          bug.drawBug();
        }
      }
    }

    if (this.city.gunsArray) {
      for (let weapon of this.city.gunsArray) {
        if (this.clock % weapon.fireRate === 0)
          weapon.shoot();
      }
    }

    //CITY

    //GUNS

    if (this.city.gunsArray) {

      for (gun of this.city.gunsArray) {
        gun.drawGun();
      }
    }

    //BUILDINGS

    if (this.city.buildingsArray) {
      for (building of this.city.buildingsArray) {
        building.drawBuilding();
      }
    }


    //BULLETS

    if (this.bullets) {
      for (bullet of this.bullets) {
        bullet.moveProjectile();
        bullet.drawProjectile();
        this.detectCollisions(bullet);
      }
      this.eraseBullets();
    }
    //POSITION SELECTOR 

    if (this.player.tileSelector) {
      this.player.drawTileSelector();
    }

    this.city.drawStructuralBar();


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
      if (bug.health <= 0) {
        splatSound.play();
        this.deadBugs.push({ x: bug.x, y: bug.y });
        this.bugsArray.splice(this.bugsArray.indexOf(bug), 1);
      }
      if (bullet.type === "bullet") {
        this.bullets.splice(this.bullets.indexOf(bullet), 1);
      }
    }
  }

}

GameMain.prototype.drawBlood = function () {
  if (this.deadBugs) {
    this.deadBugs.forEach(function (bug) {
      this.ctx.drawImage(bloodImage, bug.x, bug.y + 10, TILE_WIDTH, TILE_HEIGHT);
    }.bind(this))
  }
}








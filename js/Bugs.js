

function Bug(game, x, y) {

  this.game = game;
  this.brood = "bug";
  this.x = x;
  this.y = y;
  this.speed = 2;
  this.health = 100;
  this.fixedHealth = 100;
  this.damage = 1;
  this.spawnTime = 250;
  this.frame = Math.floor(Math.random(4));
}

function CarniBug(game, x, y) {

  Bug.call(this, game, x, y);
  this.brood = "carnibug";
  this.health = 400;
  this.fixedHealth = 400;
  this.speed = 0.5;
  this.damage = 2;
  this.spawnTime = 500;
}

CarniBug.prototype = Object.create(Bug.prototype);
CarniBug.constructor = CarniBug;

Bug.prototype.moveBug = function (bug) {

  this.x += this.speed;
}

Bug.prototype.attack = function () {
  this.game.city.structuralPoints -= this.damage;
  if (this.game.city.structuralPoints <= 0) {
    let gameOver = document.getElementsByClassName("game-over")[0];
    gameOver.style.display = "block";
  }
}

Bug.prototype.moveFrame = function () {
  if (this.game.clock % 10 === 0) {
    this.frame += 1
    if (this.frame > 3) {
      this.frame = 1
    }
  }
}

Bug.prototype.drawBug = function () {

  if (this.brood === "bug") {
    if (this.frame === 1) {
      this.game.ctx.drawImage(bugFrame2, this.x, this.y, TILE_WIDTH, TILE_HEIGHT);
    } else if (this.frame === 2) {
      this.game.ctx.drawImage(bugFrame3, this.x, this.y, TILE_WIDTH, TILE_HEIGHT);
    } else {
      this.game.ctx.drawImage(bugFrame1, this.x, this.y, TILE_WIDTH, TILE_HEIGHT);
    }
  } else {
    if (this.frame === 1) {
      this.game.ctx.drawImage(carnibugFrame1, this.x - 40, this.y, 117, 76);
    } else if (this.frame === 2) {
      this.game.ctx.drawImage(carnibugFrame2, this.x - 40, this.y, 117, 76);
    } else {
      this.game.ctx.drawImage(carnibugFrame3, this.x - 40, this.y, 117, 76);
    }
  }

  //health bar

  this.game.ctx.save();
  this.game.ctx.fillStyle = "rgb(10, 250, 80)";
  this.game.ctx.fillRect(this.x, this.y + 10, this.health * TILE_WIDTH / this.fixedHealth, 10);
  this.game.ctx.strokeStyle = "rgb(0, 0, 0)";
  this.game.ctx.strokeRect(this.x, this.y + 10, TILE_WIDTH, 10);
  this.game.ctx.restore();

}

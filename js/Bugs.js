

function Bug(game, x, y) {

  this.game = game;
  this.brood = "bug"
  this.x = x;
  this.y = y;
  this.speed = 2;
  this.health = 100;
  this.damage = 1;
  this.spawnTime = 250;
}

function CarniBug(game, x, y) {

  Bug.call(this, game, x, y);
  this.brood = "carnibug"
  this.health = 400;
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
    //alert("THE CITY HAS FALLEN")
  }
}
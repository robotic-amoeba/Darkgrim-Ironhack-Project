
var bugArray = [];

function Bug(game, x, y) {

  this.game = game;
  this.x = x;
  this.y = y;
  this.speed = 2;
  this.health = 200;
  this.spawnTime = 5000;
}


Bug.prototype.moveBug = function() {

    bug.x += bug.speed;
}
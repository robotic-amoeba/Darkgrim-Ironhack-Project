
var bugArray = [];

function Bug(game, x, y) {

  this.game = game;
  this.x = x;
  this.y = y;
  this.speed = 0.5;
  this.health = 100;
  this.spawnTime = 240;
}


Bug.prototype.moveBug = function(bug) {

    bug.x += bug.speed;
}
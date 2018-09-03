
var bugArray = [];

function Bug(game, x, y) {

  this.game = game;
  this.x = x;
  this.y = y;
  this.speed = 2;
  this.health = 100;
  this.damage = 1;
  this.spawnTime = 240;
}


Bug.prototype.moveBug = function(bug) {

  bug.x += bug.speed;  
}

Bug.prototype.attack = function() {
  this.game.city.structuralPoints -= this.damage;
  if (this.game.city.structuralPoints <=0) {
    //alert("THE CITY HAS FALLEN")
  }
}
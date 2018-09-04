 function Projectile(game, x, y, damage) {

  this.game = game;
  this.x = x;
  this.y = y;
  this.r = 3;
  this.speed = 40;
  this.damage = damage;

}



Projectile.prototype.move = function () { //moves array of projectiles of each gun

  bullet.x -= bullet.speed;
}

  


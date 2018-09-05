 function Projectile(game, x, y, damage) {

  this.game = game;
  this.x = x;
  this.y = y;
  this.r = 3;
  this.speed = 40;
  this.damage = damage;

}



Projectile.prototype.moveProjectile = function () { //moves array of projectiles of each gun

  this.x -= this.speed;
}

  


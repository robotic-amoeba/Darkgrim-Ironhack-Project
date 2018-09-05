 function Projectile(game, x, y) {

  this.game = game;
  this.type = "bullet";
  this.x = x;
  this.y = y;
  this.r = 3;
  this.speed = 40;
  this.damage = 10;
}

function LaserBeam(game, x, y) {
  
  Projectile.call(this, game, x, y);
  this.type = "laserbeam";
  this.speed = 30;
  this.damage = 5;
}



Projectile.prototype.moveProjectile = function () { //moves array of projectiles of each gun

  this.x -= this.speed;
}

LaserBeam.prototype = Object.create(Projectile.prototype);
LaserBeam.constructor = LaserBeam;

  


 function Projectile(game, x, y, damage) {

  this.game = game;
  this.type = "bullet";
  this.x = x;
  this.y = y;
  this.r = 3;
  this.speed = 40;
  this.damage = damage;
}

function LaserBeam(game, x, y, damage) {
  
  Projectile.call(this, game, x, y);
  this.type = "laserbeam";
  this.speed = 30;
  this.damage = damage;
}



Projectile.prototype.moveProjectile = function () { //moves array of projectiles of each gun

  this.x -= this.speed;
}

LaserBeam.prototype = Object.create(Projectile.prototype);
LaserBeam.constructor = LaserBeam;

Projectile.prototype.drawProjectile = function() {

  if (this.type === "bullet") {
    this.game.ctx.drawImage(bulletImage, this.x + 10, this.y + 30, 27, 15);
  } else if (this.type === "laserbeam") {
    this.game.ctx.drawImage(laserImage, 0, this.y + 33, 988, 5);
  }
}

  


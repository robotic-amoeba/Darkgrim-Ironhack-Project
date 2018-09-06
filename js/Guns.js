
function Gun(game, x, y) { //x and y are tile numbers
  this.game = game;
  this.type = "gun";
  this.x = x;
  this.y = y;
  this.fireRate = 60;
  this.range = 5;
  this.damage = 10;

}

function Laser(game, x, y) {
  Gun.call(this, game, x, y);
  this.type = "laser"
  this.fireRate = 140;
  this.damage = 5;
}

Laser.prototype = Object.create(Gun.prototype);
Laser.constructor = Laser;

Gun.prototype.shoot = function () {
  let bullet;
  if (this.type === "gun") {

    gunSound.play();
    bullet = new Projectile(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, this.damage);

  } else if (this.type === "laser") {

    laserSound.play();
    bullet = new LaserBeam(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, this.damage);
    
  }
  this.game.bullets.push(bullet);

}

Gun.prototype.drawGun = function() {
  if (this.type === "gun") {
    this.game.ctx.drawImage(gunImage, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  } else if (this.type == "laser")
    this.game.ctx.drawImage(laserGunImage, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
}

function Gun(game, x, y) { //x and y are tile numbers
  this.game = game;
  this.type = "gun";
  this.x = x;
  this.y = y;
  this.fireRate = 60;
  this.range = 5;
  this.damage = 10;

}


Gun.prototype.shoot = function () {
  let bullet;
  if (this.type === "gun") {

    bullet = new Projectile(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, this.damage);

  } else if (this.type === "laser") {

    bullet = new LaserBeam(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, this.damage);
    
  }
  this.game.bullets.push(bullet);

}

function Laser(game, x, y) {
  Gun.call(this, game, x, y);
  this.type = "laser"
  this.fireRate = 140;
  this.damage = 5;
}

Laser.prototype = Object.create(Gun.prototype);
Laser.constructor = Laser;

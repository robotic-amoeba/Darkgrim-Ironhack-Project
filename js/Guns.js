
function Gun(game ,x, y) { //x and y are tile numbers
  this.game = game;
  this.type = "gun";
  this.x = x;
  this.y = y;
  this.fireRate = 60;
  this.range = 5;
}


Gun.prototype.shoot = function() {

  if (this.type === "gun") {

    let bullet = new Projectile(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT);
    this.game.bullets.push(bullet);

  } else if (this.type === "laser") {
    
    let bullet = new Projectile(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT);
    this.game.bullets.push(bullet);

  }
  
}

function Laser(game, x, y) {
  Gun.call(this, game, x, y);
  this.type = "laser"
  this.fireRate = 30;
}

Laser.prototype = Object.create(Gun.prototype);
Laser.constructor = Laser;

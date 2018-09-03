
function Gun(game ,x, y) { //x and y are tile numbers
  this.game = game;
  this.x = x;
  this.y = y;
  this.fireRate = 60;
  this.range = 5;
}


Gun.prototype.shoot = function() {
  
  let bullet = new Projectile(this.game, this.x * TILE_WIDTH, this.y * TILE_HEIGHT);
  this.game.bullets.push(bullet);
}



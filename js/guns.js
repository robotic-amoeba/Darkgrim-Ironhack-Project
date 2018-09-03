
function Gun(game ,x, y) { //x and y are tile numbers
  this.game = game;
  this.x = x;
  this.y = y;
  this.bullets = [];
  this.fireRate = 1000;
  this.range = 5;
}


Gun.prototype.shoot = function() {
  var self = this;
  
  setInterval(function() { //<-------------------------------QUITAR CUANDO PUEDA
    
    var bullet = new Projectile(self.x * TILE_WIDTH, self.y * TILE_HEIGHT);
    game.bullets.push(bullet);
    
  }, this.fireRate)  
}



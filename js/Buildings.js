function Building(game, x, y) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.profit = 4;
  this.health;
}


Building.prototype.generateProfit = function(building) {
  this.game.player.money += this.profit;
}

Building.prototype.drawBuilding = function(){

  this.game.ctx.drawImage(siloImage, this.x * TILE_WIDTH, this.y * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
}
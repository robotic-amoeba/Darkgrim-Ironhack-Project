function Building(game, x, y) {
  this.game = game;
  this.x = x;
  this.y = y;
  this.profit = 1;
  this.health;
}


Building.prototype.generateProfit = function(building) {
  this.game.player.money += building.profit;
    console.log("money")
}

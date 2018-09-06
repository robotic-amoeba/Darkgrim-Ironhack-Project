var TILE_WIDTH = 70; //70px
var TILE_HEIGHT = 70;

function GameDisplay(game) {
  this.game = game;
  this.map = [];
  this.mapConstructor();

}

GameDisplay.prototype.mapConstructor = function () {

  for (let i = 0; i < 10; i++) {

    for (let j = 0; j < 20; j++) {
      this.map.push([j, i]);
    }
  }

}

GameDisplay.prototype.paintMap = function () {

  //TERRAIN

  for (elm of this.map) { //all map
    this.game.ctx.drawImage(background, elm[0] * TILE_WIDTH, elm[1] * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }

  for (let i = 0; i < 10; i++) {
    this.game.ctx.drawImage(cityBackground, 17 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH * 2, TILE_HEIGHT *2);
    this.game.ctx.drawImage(roofsImage, 18 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH*2, TILE_HEIGHT)*2;
  }
  this.game.ctx.drawImage(cityBackgroundGrass, 17 * TILE_WIDTH,  0, TILE_WIDTH, TILE_HEIGHT);
  this.game.ctx.drawImage(cityBackgroundGrass, 17 * TILE_WIDTH,  5 * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);


  //WALL

  for (let i = 0; i < 10; i++) {
    this.game.ctx.drawImage(wallImage, 14 * TILE_WIDTH, i * TILE_HEIGHT, TILE_WIDTH, TILE_HEIGHT);
  }
}

GameDisplay.prototype.displayStatus = function () {
  this.game.moneyTag.innerHTML = "$" + this.game.player.money;
}





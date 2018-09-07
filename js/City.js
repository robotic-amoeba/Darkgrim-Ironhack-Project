
function City(game) {
  this.game = game;
  this.buildingsArray = [];
  this.gunsArray = [];
  this.structuralPoints = 10000;
  this.buildPrice = 150;
  this.gunPrice = 100;
  this.laserPrice = 200;
  this.upgradeGunPrice = 150;
  this.upgradeGunDMG = 100;
}

City.prototype.drawStructuralBar = function () {
  if (this.structuralPoints > 2500) {
    this.game.ctx.save();
    this.game.ctx.fillStyle = "rgb(10, 250, 80)";
    this.game.ctx.fillRect(1350, 650, 30, -this.structuralPoints * 600 / 10000);
    this.game.ctx.strokeStyle = "rgb(0, 0, 0)";
    this.game.ctx.strokeRect(1350, 50, 30, 600);
    this.game.ctx.restore();
  } else if (this.structuralPoints > 0){
    this.game.ctx.save();
    this.game.ctx.fillStyle = "rgb(250, 10, 10)";
    this.game.ctx.fillRect(1350, 650, 30, -this.structuralPoints * 600 / 10000);
    this.game.ctx.strokeStyle = "rgb(0, 0, 0)";
    this.game.ctx.strokeRect(1350, 50, 30, 600);
    this.game.ctx.restore();

  }
}



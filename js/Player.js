
function Player(game) {
  this.game = game;
  this.points = 0;
  this.money = 0;
  this.gunArray = [];
  this.gunPosition = {}
}



Player.prototype.createGun = function (x, y) {
  
  let gun = new Gun(this.game, x, y);
  this.gunArray.push(gun);
}



Player.prototype.gunPositioning = function (gunButton) {
  
  this.gunPosition = { x: 14, y: 0 };
  gunButton.disabled   = true;

  const choosePos = event => {
    switch (event.code) {

      case "ArrowDown":
        if (this.gunPosition.y < 9) {
          this.gunPosition.y += 1;
        }
        break;

      case "ArrowUp":
        if (this.gunPosition.y > 0) {
          this.gunPosition.y -= 1;
        }
        break;

      case "Space": {
        let vacant = true;
        for (gun of this.gunArray) {
          if (gun.y == this.gunPosition.y) {
            vacant = false;
          }
        }
        if (vacant) {
          this.createGun(this.gunPosition.x, this.gunPosition.y);
          this.gunPosition = {};
        }
        window.removeEventListener("keydown", choosePos);
        gunButton.disabled = false;
        break;
      }
    }

  }
  window.addEventListener("keydown", choosePos)

}



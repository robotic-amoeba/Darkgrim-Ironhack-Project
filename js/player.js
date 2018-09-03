
function Player(game, ){
  this.game = game;
  this.points = 0;
  this.money = 0;
  this.gunPosition = {
    x: 14,
    y: 0
  }

  this.gunArray = [];
}



Player.prototype.createGun = function(x, y) {
    
  var gun = new Gun(x, y);
  this.gunArray.push(gun);            //  <----------------------------
}



Player.prototype.gunPositioning = function() {
  
 
  window.addEventListener("keydown", function choosePos(event) {  //<---------------------------------------

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

      case "Enter":
      window.removeEventListener("keydown", choosePos);
      let vacant = true;
      for (gun of this.gunArray) {
        if (gun.y == this.gunPosition.y) {
          vacant = false;
        }
      } 
      if (vacant) {
        this.createGun(this.gunPosition.x, this.gunPosition.y);
        this.gunPosition = {x: 14, y: 0};
        return;
      }
    }
  }.bind(this))  
}



window.onload = function() {

  const TILE_WIDTH = 70; //70px
  const TILE_HEIGHT = 70; 

  var map = [];

  function mapConstructor() { //[x, y]
    for (let i = 0; i < 10; i++ ) { 

      for (let j = 0; j<20; j++) {
        map.push([j, i]);
        /* map[j][].push(j);  
        map[j].push(i); */
      }
    }

  }
  mapConstructor();
  



  function Railgun() {
    this.x;
    this.y;
  }

  function drawRailgun() {

  }




}




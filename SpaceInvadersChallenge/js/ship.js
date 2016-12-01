// Constants used in programming the ship, enhance the programmer readability
const SHIP_LEFT = -1, SHIP_RIGHT = 1, SHIP_STOP=0;

function Ship () {
  this.x = width/2;
  this.height = 60;
  this.width = 20;


  this.dir = 0; //initialy the ship stop


  this.show = function () {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, this.width, this.height);
  };
  this.setDir = function (dir) {
    // set direction of the ship
    // -1 : left , 0 : stop , 1: right
    this.dir = dir;

  };  // ==>[function : setDir]
  this.move = function() {
    this.x += this.dir*5;
  }

  this.hitsEdge = function ()  {
    if((ship.x + ship.width/2) >= width || ship.x <= ship.width/2)
      return true;
    else
      return false;
  };
}

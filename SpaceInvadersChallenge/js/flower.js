function Flower (x,y) {
  this.x = x;
  this.y = y;
  this.r = 30;

  this.shrink = function shrink() {
    this.r -=   0.2*this.r;
  };
  this.dead = function () {
    if(this.r < 10) {
      return true;
    } else {
      return false;
    }
  };

  this.show = function () {
    fill(255,0,200);
    noStroke();
    ellipse(this.x, this.y,this.r*2, this.r*2);
  };
}

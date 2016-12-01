function Drop (x,y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  var speed = 5;
  this.toDelete = false;

  this.show = function () {
    noStroke();
    fill(0,100,255);
    ellipse(this.x, this.y,this.r, this.r);
  };

  this.evaporate = function () {
    this.toDelete = true;
  };

  this.hits = function (flower) {
    // Check if the objects intersect
    var d = dist(this.x, this.y, flower.x, flower.y);
    if( d < this.r + flower.r){
      return true;
    } else {
      return false;
    }
  };

  this.hitsEdge = function () {
    if (this.y <= this.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function () {
    this.y = this.y -1*speed;
  };
}

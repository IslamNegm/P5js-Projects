/*
* Function will remove the walls based on the position of the two cells
*/
function removeWall (current, next) {
  // if the cells are in the same column
  if (current.i === next.i) {
    if(next.j < current.j) {  // Moving top ?
      current.walls[0]  = false;
      next.walls[2]     = false;
    } else {                  // Moving bottom ?
      current.walls[2]  = false;
      next.walls[0]     = false;
    }
  }else if (current.j === next.j) { // Cells are in the same row
    if (next.i < current.i) { // Moving left
      current.walls[3]  = false;
      next.walls[1]     = false;
    } else {                  // Moving right
      current.walls[1]  = false;
      next.walls[3]     = false;
    }
  }else {
    // the same cell (you didn't move :) )
  }
}


/*
* Function that converts the 2D dimensions two 1D
*/
function index (i,j) {
  if (i<0 || j <0  || i>cols-1 || j> rows-1)
    return -1;
  return i+j*cols;
}


/*
* Class constructor for the cell object
*/
function Cell (i, j) {
  this.i = i;
  this.j = j;
  this.visited = false;

  // top, right, bottom, left
  this.walls = [true, true, true, true ];

  this.checkNeighbors = function checkNeighbors () {
    var neighbours = [];

    var top     = grid[index(i  ,j-1)];
    var right   = grid[index(i+1,j  )];
    var bottom  = grid[index(i  ,j+1)];
    var left    = grid[index(i-1,j  )];

    if(top    && !top.visited)
      neighbours.push(top)
    if(right  && !right.visited)
      neighbours.push(right)
    if(bottom && !bottom.visited)
      neighbours.push(bottom)
    if(left   && !left.visited)
      neighbours.push(left)

    if(neighbours.length > 0){
      var r = floor(random(0,neighbours.length));
      return neighbours[r];
    } else {
      return undefined;
    }
  }; // => [function : checkNeighbors]

  this.highlight = function highlight () {
    var x = this.i*w;
    var y = this.j*w;
    noStroke();
    fill(0,255,10,100);
    rect(x,y,w,w);
  }; // => [function : highlight]


  // Draw walls
  this.show = function show () {
    var x = this.i*w;
    var y = this.j*w;
    stroke(255);
    if (this.walls[0])
      line(x   , y   , x+w , y  );
    if (this.walls[1])
      line(x+w , y   , x+w , y+w);
    if (this.walls[2])
      line(x+w , y+w , x   , y+w);
    if (this.walls[3])
      line(x   , y+w , x   , y  );

    if(this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x,y,w,w);
    }
  }; // => [function : show]

}

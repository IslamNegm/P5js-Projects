var cols,rows;
// Size of the square in the maze in px
var w = 30;
var grid = [];

var current;
var stack =[];

function setup () {
  // Calculate the number of rows and cols
  createCanvas(400,400);
  cols = floor(width /w);
  rows = floor(height /w);
  // Create the grid
  for(var j=0; j<rows ; j++) {
    for(var i=0; i<cols; i++) {
      var cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  // The initial cell
  current = grid[0];
  frameRate(5);
}

function draw () {
  // Future Feature >> This slows the processing, cuz it have to update the
  // grid every time
  background(51);
  for (var i=0; i<grid.length; i++) {
    grid[i].show();
  }
  // Mark current cell as visited and highlight it with green
  current.visited = true;
  current.highlight();

  // STEP 01 : check for unvisited neighbours
  var next = current.checkNeighbors();

  if(next !== undefined) {
    // if there's available neighbours

    next.visited = true;
    // STEP 02 : push this cell to the saved path stack
    stack.push(current);
    // STEP 03 : remove the walls
    removeWall(current, next);
    // STEP 04 : move to the next
    current = next;
  } else if (stack.length > 0) {
    // if there's not available neighbours
    // just remember the last position (pop the saved path stack)
    current = stack.pop();
  }
}

var ship;
var flowers = [];
var drops = [];

// game status vars
var g_background = 52;
// Global statuses
var g_waterMode = OFF;


function setup () {
  createCanvas(600,400);
  ship = new Ship();
  // drop = new Drop(width/2, height/2 );
  for (var i = 0; i<6 ; i++)
    flowers[i] = new Flower(i*80+80, 60 );
}

function draw () {
  background(g_background);
  ship.show();
  // Always make the ship moves and control the direction with setDir function
  ship.move();

  // Always
  water();

  // If flowers intersect with the water droplets make the flowers shrink and the droplets evaporate
  for(var i = 0; i< drops.length; i++){
    drops[i].show();
    drops[i].move();
    for (var j=0; j<flowers.length; j++){
      if(drops[i].hits(flowers[j])) {
        flowers[j].shrink();
        drops[i].evaporate();
      } else if (drops[i].hitsEdge()) {
        drops[i].evaporate();
        console.log("Hit the edge!");
      }
    }
  }

  // Monitor the droplets when it evaporates and then kill them from the array
  for(var i=drops.length-1 ; i>=0; i--) {
    if(drops[i].toDelete)
    drops.splice(i,1);
  }

  // Monitor the flowers untill they dies then add then kill them
  if(typeof flowers[0] !== "undefined")
  {
    for (var i=flowers.length -1; i>=0; i--) {
      if(flowers[i].dead()){
        flowers.splice(i,1);
      }
    }
  }else {
    // game.won();
  }

  // Rendering the enemies
  for (var i = flowers.length -1; i>=0 ; i--){
    flowers[i].show();
  }

  // Monitor the ship, and stop it if it hits the edge
  if(ship.hitsEdge())
    ship.setDir(SHIP_STOP);
}

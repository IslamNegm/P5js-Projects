const ON = 1;
const OFF= 0;
function keyReleased() {
  if(key != ' ')
    ship.setDir(SHIP_STOP);
  if(key === ' ')
    turnWater(OFF);
}

function keyPressed() {
  if(key === ' '){
    // var drop = new Drop(ship.x, height-ship.height);
    // drops.push(drop);
    turnWater(ON);
  }

  if (keyCode === RIGHT_ARROW ) {
    ship.setDir(SHIP_RIGHT);
  }
  else if (keyCode === LEFT_ARROW){
    ship.setDir(SHIP_LEFT);
  }
}

function turnWater(mode) { g_waterMode = mode;}
function water () {
  if (g_waterMode) {
    var drop = new Drop(ship.x, height-ship.height);
    drops.push(drop);
  } else {
    // nothing
  }
}

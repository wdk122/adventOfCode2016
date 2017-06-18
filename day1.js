/*

You're airdropped near Easter Bunny Headquarters in a city somewhere. "Near", unfortunately, is as close as you can get - the instructions on the Easter Bunny Recruiting Document the Elves intercepted start here, and nobody had time to work them out further.

The Document indicates that you should start at the given coordinates (where you just landed) and face North. Then, follow the provided sequence: either turn left (L) or right (R) 90 degrees, then walk forward the given number of blocks, ending at a new intersection.

There's no time to follow such ridiculous instructions on foot, though, so you take a moment and work out the destination. Given that you can only walk on the street grid of the city, how far is the shortest path to the destination?

For example:

Following R2, L3 leaves you 2 blocks East and 3 blocks North, or 5 blocks away.
R2, R2, R2 leaves you 2 blocks due South of your starting position, which is 2 blocks away.
R5, L5, R5, R3 leaves you 12 blocks away.
How many blocks away is Easter Bunny HQ?

Puzzle Input:
R3, R1, R4, L4, R3, R1, R1, L3, L5, L5, L3, R1, R4, L2, L1, R3, L3, R2, R1, R1, L5, L2, L1, R2, L4, R1, L2, L4, R2, R2, L2, L4, L3, R1, R4, R3, L1, R1, L5, R4, L2, R185, L2, R4, R49, L3, L4, R5, R1, R1, L1, L1, R2, L1, L4, R4, R5, R4, L3, L5, R1, R71, L1, R1, R186, L5, L2, R5, R4, R1, L5, L2, R3, R2, R5, R5, R4, R1, R4, R2, L1, R4, L1, L4, L5, L4, R4, R5, R1, L2, L4, L1, L5, L3, L5, R2, L5, R4, L4, R3, R3, R1, R4, L1, L2, R2, L1, R4, R2, R2, R5, R2, R5, L1, R1, L4, R5, R4, R2, R4, L5, R3, R2, R5, R3, L3, L5, L4, L3, L2, L2, R3, R2, L1, L1, L5, R1, L3, R3, R4, R5, L3, L5, R1, L3, L5, L5, L2, R1, L3, L1, L3, R4, L1, R3, L2, L2, R3, R3, R4, R4, R1, L4, R1, L5


start at 0,0 and face north
r means turn right 90˚
l means turn left  90˚
r3 means turn left and go 3 blocks


find:
  block count from origin to hq

======================
PART 2
================
find distance from origin to the first location visited twice


*/

var puzzleInput = 'R3, R1, R4, L4, R3, R1, R1, L3, L5, L5, L3, R1, R4, L2, L1, R3, L3, R2, R1, R1, L5, L2, L1, R2, L4, R1, L2, L4, R2, R2, L2, L4, L3, R1, R4, R3, L1, R1, L5, R4, L2, R185, L2, R4, R49, L3, L4, R5, R1, R1, L1, L1, R2, L1, L4, R4, R5, R4, L3, L5, R1, R71, L1, R1, R186, L5, L2, R5, R4, R1, L5, L2, R3, R2, R5, R5, R4, R1, R4, R2, L1, R4, L1, L4, L5, L4, R4, R5, R1, L2, L4, L1, L5, L3, L5, R2, L5, R4, L4, R3, R3, R1, R4, L1, L2, R2, L1, R4, R2, R2, R5, R2, R5, L1, R1, L4, R5, R4, R2, R4, L5, R3, R2, R5, R3, L3, L5, L4, L3, L2, L2, R3, R2, L1, L1, L5, R1, L3, R3, R4, R5, L3, L5, R1, L3, L5, L5, L2, R1, L3, L1, L3, R4, L1, R3, L2, L2, R3, R3, R4, R4, R1, L4, R1, L5';


function blockCount(input) {



  // start at origin
  let location = [0, 0];
  // start facing north (0˚), east is 90, south is 180, etc
  let direction = 0;



  // split input string
  let inputArray = input.split(', ');
  // loop thru input steps to adjust location
  
  inputArray.forEach(function(step) {
    // change direction 
    if (step[0] === 'R') {
      direction += 90;
    } else {
      direction -= 90;
    }

    // correct direction if lt 0 or gte 360
    if (direction < 0) {
      direction += 360;
    }
    if (direction >= 360) {
      direction -= 360;
    }

    console.log('direction: ' + direction);


    // convert magnitude to number
    // initialize magnitude as empty string, convert to number later
    let mag = step.slice(1) * 1;
    // for (let i = 1; i < step.length; i++) {
      // mag += step[i];
    // }
    // convert mag to number
    // mag = 1 * mag;
    console.log('magnitude: ' + mag);

    // adjust location based on mag and direction
    if (direction === 0) {
      location[1] += mag;
    } else if (direction === 90) {
      location[0] += mag;
    } else if (direction === 180) {
      location[1] -= mag;
    } else if (direction === 270) {
      location[0] -= mag;
    } else {
      console.log('invalid direction');
    }
    console.log('location: ' + location[0] + ', ' + location[1]);




  });


  // return number of blocks from starting location
  console.log('final distance:');
  console.log(Math.abs(location[0]) + Math.abs(location[1]));
}

blockCount2(puzzleInput);

function blockCount2(input) {
  // what is first location visited twice?
  // object to track location history
  let history = {
    0: {
      0: 1
    }
  };
  // start at origin
  let location = [0, 0];
  // start facing north (0˚), east is 90, south is 180, etc
  let direction = 0;
  // split input string
  let inputArray = input.split(', ');

  // loop thru input steps to adjust location
  for (let i = 0; i < inputArray.length; i++) {
  // inputArray.forEach(function(step) {
    // change direction 
      if (inputArray[i][0] === 'R') {
        direction += 90;
      } else {
        direction -= 90;
      }
    // correct direction if lt 0 or gte 360
      if (direction < 0) {
        direction += 360;
      }
      if (direction >= 360) {
        direction -= 360;
      }
      // console.log('direction: ' + direction);
    // convert magnitude to number
      let mag = inputArray[i].slice(1) * 1;
      // console.log('magnitude: ' + mag);

    // adjust location based on mag and direction
    // TODO: track location history
    while (mag > 0) {
      if (direction === 0) {
        location[1] ++;

        // check history
        if (historyCheck(history, location)) {
          return;
        }

        mag --;
      } else if (direction === 90) {
        location[0] ++;
        if (historyCheck(history, location)) {
          return;
        }
        mag --;

      } else if (direction === 180) {
        location[1] --;
        if (historyCheck(history, location)) {
          return;
        }
        mag --;

      } else if (direction === 270) {
        location[0] --;
        if (historyCheck(history, location)) {
          return;
        }
        mag --;

      } else {
        console.log('invalid direction');
        return;
      }
    }
    console.log('location: ' + location[0] + ', ' + location[1]);
  };
}


function historyCheck(hist, loc) {
  // if current location is in hist
  if (hist[loc[0]] && hist[loc[0]][loc[1]]) {
    // print hq distance and return 
    console.log('hq distance: ' + 
                 (
                   Math.abs(loc[0]) + 
                   Math.abs(loc[1])
                 )
               );
    return true;
    // else add current location to history
    // if current x coord !in history,
    // add x: {y : 1}
  } else if (!hist[loc[0]]) {
    let loc1 = loc[1];
    hist[loc[0]] = { loc1: 1 };
    // if current x coord in history,
    // add y: 1 property to hist[loc[0]]
  } else {
    hist[loc[0]][loc[1]] = 1;
  }
  return false;
}
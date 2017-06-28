const grid = [];
for (let i = 0; i < 6; i++) {
  grid.push(new Array(50));
}
for (let x = 0; x < grid.length; x++) {
  for (let y = 0; y < grid[x].length; y++) {
    grid[x][y] = 0;
  }
}


function main(input) {
  let sum = 0;
  const instructions = input.split('\n');
  instructions.forEach((inst) => {
    let foo = inst.split(' ');
    if (foo[0] === 'rect') {
      rect(inst);
    } else if (foo[1] === 'row') {
      rotRow(inst);
    } else if (foo[1] === 'column') {
      rotCol(inst);
    } else {
      console.log('ERROR');
    }
  });

  grid.forEach((row) => {
    row.forEach((pxl) => {
      sum += pxl;
    });
  });

  console.log(grid);
  const gridReadable = [];
  grid.forEach((row) => {
    const baz = row.join('');
    gridReadable.push(baz);
  });
  console.log(gridReadable);
  console.log(sum);
  return sum;
}

function rect(inst) {
  console.log('inside rect');
  const foo = inst.split(' '); // rect 1x1
  const width = foo[1].split('x')[0];
  const height = foo[1].split('x')[1];
  console.log('width: ' + width);
  console.log('height: ' + height);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      grid[y][x] = 1;
    }
  }
  return;
}

function rotRow(inst) {
  // rotate row y=0 by 10
  const foo = inst.split('=')[1];
  const row = foo.split(' by ')[0];
  const mag = foo.split(' by ')[1];
  const oldRow = grid[row].slice();
  grid[row] = oldRow
    .slice(oldRow.length - mag)
    .concat(oldRow)
    .slice(0, oldRow.length);
  return;
}

function rotCol(inst) {
  // rotate column x=38 by 5
  const foo = inst.split('=')[1];
  const col = foo.split(' by ')[0];
  const mag = foo.split(' by ')[1];
  // make array that copies old col
  const oldCol = [];
  grid.forEach((row) => {
    oldCol.push(row[col]);
  });
  // make a new col array
  const newCol = oldCol
    .slice(oldCol.length - mag)
    .concat(oldCol)
    .slice(0, oldCol.length); 
  // update grid w/ newCol vals
  for (let i = 0; i < grid.length; i++) {
    grid[i][col] = newCol[i];
  }

}

const input = `rect 1x1
rotate row y=0 by 10
rect 1x1
rotate row y=0 by 10
rect 1x1
rotate row y=0 by 5
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 4
rect 1x1
rotate row y=0 by 3
rect 1x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 2
rect 1x1
rotate row y=0 by 3
rect 2x1
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate row y=1 by 12
rotate row y=0 by 10
rotate column x=0 by 1
rect 9x1
rotate column x=7 by 1
rotate row y=1 by 3
rotate row y=0 by 2
rect 1x2
rotate row y=1 by 3
rotate row y=0 by 1
rect 1x3
rotate column x=35 by 1
rotate column x=5 by 2
rotate row y=2 by 5
rotate row y=1 by 5
rotate row y=0 by 2
rect 1x3
rotate row y=2 by 8
rotate row y=1 by 10
rotate row y=0 by 5
rotate column x=5 by 1
rotate column x=0 by 1
rect 6x1
rotate row y=2 by 7
rotate row y=0 by 5
rotate column x=0 by 1
rect 4x1
rotate column x=40 by 2
rotate row y=2 by 10
rotate row y=0 by 12
rotate column x=5 by 1
rotate column x=0 by 1
rect 9x1
rotate column x=43 by 1
rotate column x=40 by 2
rotate column x=38 by 1
rotate column x=15 by 1
rotate row y=3 by 35
rotate row y=2 by 35
rotate row y=1 by 32
rotate row y=0 by 40
rotate column x=32 by 1
rotate column x=29 by 1
rotate column x=27 by 1
rotate column x=25 by 1
rotate column x=23 by 2
rotate column x=22 by 1
rotate column x=21 by 3
rotate column x=20 by 1
rotate column x=18 by 3
rotate column x=17 by 1
rotate column x=15 by 1
rotate column x=14 by 1
rotate column x=12 by 1
rotate column x=11 by 3
rotate column x=10 by 1
rotate column x=9 by 1
rotate column x=8 by 2
rotate column x=7 by 1
rotate column x=4 by 1
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=0 by 1
rect 34x1
rotate column x=44 by 1
rotate column x=24 by 1
rotate column x=19 by 1
rotate row y=1 by 8
rotate row y=0 by 10
rotate column x=8 by 1
rotate column x=7 by 1
rotate column x=6 by 1
rotate column x=5 by 2
rotate column x=3 by 1
rotate column x=2 by 1
rotate column x=1 by 1
rotate column x=0 by 1
rect 9x1
rotate row y=0 by 40
rotate column x=43 by 1
rotate row y=4 by 10
rotate row y=3 by 10
rotate row y=2 by 5
rotate row y=1 by 10
rotate row y=0 by 15
rotate column x=7 by 2
rotate column x=6 by 3
rotate column x=5 by 2
rotate column x=3 by 2
rotate column x=2 by 4
rotate column x=0 by 2
rect 9x2
rotate row y=3 by 47
rotate row y=0 by 10
rotate column x=42 by 3
rotate column x=39 by 4
rotate column x=34 by 3
rotate column x=32 by 3
rotate column x=29 by 3
rotate column x=22 by 3
rotate column x=19 by 3
rotate column x=14 by 4
rotate column x=4 by 3
rotate row y=4 by 3
rotate row y=3 by 8
rotate row y=1 by 5
rotate column x=2 by 3
rotate column x=1 by 3
rotate column x=0 by 2
rect 3x2
rotate row y=4 by 8
rotate column x=45 by 1
rotate column x=40 by 5
rotate column x=26 by 3
rotate column x=25 by 5
rotate column x=15 by 5
rotate column x=10 by 5
rotate column x=7 by 5
rotate row y=5 by 35
rotate row y=4 by 42
rotate row y=2 by 5
rotate row y=1 by 20
rotate row y=0 by 45
rotate column x=48 by 5
rotate column x=47 by 5
rotate column x=46 by 5
rotate column x=43 by 5
rotate column x=41 by 5
rotate column x=38 by 5
rotate column x=37 by 5
rotate column x=36 by 5
rotate column x=33 by 1
rotate column x=32 by 5
rotate column x=31 by 5
rotate column x=30 by 1
rotate column x=28 by 5
rotate column x=27 by 5
rotate column x=26 by 5
rotate column x=23 by 1
rotate column x=22 by 5
rotate column x=21 by 5
rotate column x=20 by 1
rotate column x=17 by 5
rotate column x=16 by 5
rotate column x=13 by 1
rotate column x=12 by 3
rotate column x=7 by 5
rotate column x=6 by 5
rotate column x=3 by 1
rotate column x=2 by 3`

main(input);

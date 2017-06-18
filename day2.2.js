// puzzle input
var puzzleInput = `LURLDDLDULRURDUDLRULRDLLRURDUDRLLRLRURDRULDLRLRRDDULUDULURULLURLURRRLLDURURLLUURDLLDUUDRRDLDLLRUUDURURRULURUURLDLLLUDDUUDRULLRUDURRLRLLDRRUDULLDUUUDLDLRLLRLULDLRLUDLRRULDDDURLUULRDLRULRDURDURUUUDDRRDRRUDULDUUULLLLURRDDUULDRDRLULRRRUUDUURDULDDRLDRDLLDDLRDLDULUDDLULUDRLULRRRRUUUDULULDLUDUUUUDURLUDRDLLDDRULUURDRRRDRLDLLURLULDULRUDRDDUDDLRLRRDUDDRULRULULRDDDDRDLLLRURDDDDRDRUDUDUUDRUDLDULRUULLRRLURRRRUUDRDLDUDDLUDRRURLRDDLUUDUDUUDRLUURURRURDRRRURULUUDUUDURUUURDDDURUDLRLLULRULRDURLLDDULLDULULDDDRUDDDUUDDUDDRRRURRUURRRRURUDRRDLRDUUULLRRRUDD
DLDUDULDLRDLUDDLLRLUUULLDURRUDLLDUDDRDRLRDDUUUURDULDULLRDRURDLULRUURRDLULUDRURDULLDRURUULLDLLUDRLUDRUDRURURUULRDLLDDDLRUDUDLUDURLDDLRRUUURDDDRLUDDDUDDLDUDDUUUUUULLRDRRUDRUDDDLLLDRDUULRLDURLLDURUDDLLURDDLULLDDDRLUDRDDLDLDLRLURRDURRRUDRRDUUDDRLLUDLDRLRDUDLDLRDRUDUUULULUDRRULUDRDRRLLDDRDDDLULURUURULLRRRRRDDRDDRRRDLRDURURRRDDULLUULRULURURDRRUDURDDUURDUURUURUULURUUDULURRDLRRUUDRLLDLDRRRULDRLLRLDUDULRRLDUDDUUURDUDLDDDUDL
RURDRUDUUUUULLLUULDULLLDRUULURLDULULRDDLRLLRURULLLLLLRULLURRDLULLUULRRDURRURLUDLULDLRRULRDLDULLDDRRDLLRURRDULULDRRDDULDURRRUUURUDDURULUUDURUULUDLUURRLDLRDDUUUUURULDRDUDDULULRDRUUURRRDRLURRLUUULRUDRRLUDRDLDUDDRDRRUULLLLDUUUULDULRRRLLRLRLRULDLRURRLRLDLRRDRDRLDRUDDDUUDRLLUUURLRLULURLDRRULRULUDRUUURRUDLDDRRDDURUUULLDDLLDDRUDDDUULUDRDDLULDDDDRULDDDDUUUURRLDUURULRDDRDLLLRRDDURUDRRLDUDULRULDDLDDLDUUUULDLLULUUDDULUUDLRDRUDLURDULUDDRDRDRDDURDLURLULRUURDUDULDDLDDRUULLRDRLRRUURRDDRDUDDLRRLLDRDLUUDRRDDDUUUDLRRLDDDUDRURRDDUULUDLLLRUDDRULRLLLRDLUDUUUUURLRRUDUDDDDLRLLULLUDRDURDDULULRDRDLUDDRLURRLRRULRL
LDUURLLULRUURRDLDRUULRDRDDDRULDLURDDRURULLRUURRLRRLDRURRDRLUDRUUUULLDRLURDRLRUDDRDDDUURRDRRURULLLDRDRDLDUURLDRUULLDRDDRRDRDUUDLURUDDLLUUDDULDDULRDDUUDDDLRLLLULLDLUDRRLDUUDRUUDUDUURULDRRLRRDLRLURDRURURRDURDURRUDLRURURUUDURURUDRURULLLLLUDRUDUDULRLLLRDRLLRLRLRRDULRUUULURLRRLDRRRDRULRUDUURRRRULDDLRULDRRRDLDRLUDLLUDDRURLURURRLRUDLRLLRDLLDRDDLDUDRDLDDRULDDULUDDLLDURDULLDURRURRULLDRLUURURLLUDDRLRRUUDULRRLLRUDRDUURLDDLLURRDLRUURLLDRDLRUULUDURRDULUULDDLUUUDDLRRDRDUDLRUULDDDLDDRUDDD
DRRDRRURURUDDDRULRUDLDLDULRLDURURUUURURLURURDDDDRULUDLDDRDDUDULRUUULRDUDULURLRULRDDLDUDLDLULRULDRRLUDLLLLURUDUDLLDLDRLRUUULRDDLUURDRRDLUDUDRULRRDDRRLDUDLLDLURLRDLRUUDLDULURDDUUDDLRDLUURLDLRLRDLLRUDRDUURDDLDDLURRDDRDRURULURRLRLDURLRRUUUDDUUDRDRULRDLURLDDDRURUDRULDURUUUUDULURUDDDDUURULULDRURRDRDURUUURURLLDRDLDLRDDULDRLLDUDUDDLRLLRLRUUDLUDDULRLDLLRLUUDLLLUUDULRDULDLRRLDDDDUDDRRRDDRDDUDRLLLDLLDLLRDLDRDLUDRRRLDDRLUDLRLDRUURUDURDLRDDULRLDUUUDRLLDRLDLLDLDRRRLLULLUDDDLRUDULDDDLDRRLLRDDLDUULRDLRRLRLLRUUULLRDUDLRURRRUULLULLLRRURLRDULLLRLDUUUDDRLRLUURRLUUUDURLRDURRDUDDUDDRDDRUD`;
/*
given:
  string input, each line corresponds to a number
  udrl up down left right to move on keypad

  123
  456
  789

  first line finger starts at 5

find the bathroom code




*/



function codeFinder(input) {
  // initialize keycode
  let keycode = '';
  // create keypad, use zeroes for non-keys
  const keypad = [
    [0,   0,   1,   0, 0], 
    [0,   2,   3,   4, 0],
    [5,   6,   7,   8, 9],
    [0, 'A', 'B', 'C', 0],
    [0,   0, 'D',   0, 0]
  ];
  // initialize finger position [row, col] at 5:
  const finger = [2, 0];


  // iterate over each char in string
  for (let i = 0; i < input.length; i++) {
    // write cases for lrud and newline
    if (input[i] === 'R') {
      // move finger to the right
      // increment col by 1 if possible
      if (finger[1] < 4   && keypad[finger[0]][finger[1] + 1]) {
        finger[1]++;
      }

    } else if (input[i] === 'L') {
      if (finger[1] !== 0 && keypad[finger[0]][finger[1] - 1]) {
        finger[1]--;
      }
    } else if (input[i] === 'U') {
      if (finger[0] !== 0 && keypad[finger[0] - 1][finger[1]]) {
        finger[0]--;
      }
    } else if (input[i] === 'D') {
      if (finger[0] < 4   && keypad[finger[0] + 1][finger[1]]) {
        finger[0]++;
      }

    } else if (input[i] === '\n') {
      // append current finger location to keycode
      keycode += keypad[finger[0]][finger[1]];
    } else {
      console.log('invalid input');
      return;
    }
  }
  keycode += keypad[finger[0]][finger[1]];
  console.log(keycode);
  return keycode;
}


codeFinder(puzzleInput);
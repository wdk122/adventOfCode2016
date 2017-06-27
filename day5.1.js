/*
given doorId = puzinput

func main
  pw is ''
  i is 0
  while pw len lt 8
    if hash (input + i)'s first five chars are zeros
      add the 6th char of the hash to pw
    i++
  ret pw

*/

const input = 'wtnhxymk';
const md5 = require('./md5');

function main() {
  let pw = '';
  let i = 0;
  while (pw.length < 8) {
    if (md5(input + i).substr(0, 5) === '00000') {
      pw += md5(input + i).substr(5, 1);
      console.log(pw);
    }
    i++;
  }
  console.log(pw);
}

main();

// console.log(md5(input + 4));
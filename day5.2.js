/*
given doorId = puzinput

func main
  pw is array of 8 underscores
  i is 0
  len is 0
  while len lt 8
    hash is md5(input + i)
    if hash's first five chars are zeros and 6th char is num from 0 to 7
      add the 7th char of the hash to pw
      len++
    i++
  ret pw join on ''

*/

const input = 'wtnhxymk';
const md5 = require('./md5');

function main() {
  let pw = new Array(8);
  let i = 0;
  let len = 0;
  while (len < 8) {
    let hash = md5(input + i);
    if (hash.substr(0, 5) === '00000') {
      if (hash[5].charCodeAt() > 47 && hash[5].charCodeAt() < 56) {
        if (!pw[hash[5]]) {
          // insert hash[6] into pw array at loc hash[5]

          pw[hash[5]] = hash[6];
          console.log(pw.join(''));
          len++;
        }
      }
    }
    i++;
  }
  console.log(pw.join(''));
}

main();

// console.log(md5(input + 4));
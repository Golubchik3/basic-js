const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let arr = str.split('');
  let min = arr[0];
  let index = 0;

  let digitArr = arr.map(item => +item);
  console.log(digitArr);

  for (i = 0; i < digitArr.length; i++) {
    if (digitArr[i] < digitArr[i+1]) {
      min = digitArr[i];
    }
  }
  
index = digitArr.lastIndexOf(min);
digitArr.splice(index, 1)

  return +digitArr.join('');
}

console.log(deleteDigit(10));

module.exports = {
  deleteDigit
};

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
  let max = 0;
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    let str2 = str.replace(str[i], '');
    if (Number(str2) > max) {
      max = Number(str2);
    }
  }
  return max;
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};

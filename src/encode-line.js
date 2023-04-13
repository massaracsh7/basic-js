const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let number = 1;
  let str2 = '';
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      number++;
    } else {
      str2 += number >= 2 ? number + str[i] : str[i];
      number = 1;
    }
  }
  return str2;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};

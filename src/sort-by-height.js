const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr2 = arr.slice();
  let place = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      place.push(i);
    }
  }
  let place2 = place.slice();
  while (place2.length) {
    arr2.splice(place2.pop(), 1);
  }
  arr2.sort((a, b) => a - b);
  while (place.length) {
    arr2.splice(place.shift(), 0, -1);
  }
  return arr2;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};

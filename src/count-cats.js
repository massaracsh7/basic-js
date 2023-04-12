const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
      let num = 0;
      for (let i = 0; i < backyard.length; i++) {
        for (let j = 0; j < backyard[i].length; j++) {
          if (backyard[i][j] === '^^') {
            num++;
          }
        }
      }
      return num;
    
  // remove line with error and write your code here
}

module.exports = {
  countCats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let num = 0;
    let max = 1;
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        num++;
        num = 1 + this.calculateDepth(item);
      }
      if (num > max) {
        max = num;
      }
    })

    return max;
    // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};

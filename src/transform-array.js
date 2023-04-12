const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }
    let arr3 = [];

    for (i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
        i++;
      } else
      if (arr[i] === '--discard-prev') {
        if (arr[i - 2] !== '--discard-next') {
          arr3.pop();
        }
      } else
      if (arr[i] === '--double-next') {
        if (arr[i + 1] !== undefined) {
          arr3.push(arr[i + 1])
        }
      } else
      if (arr[i] === '--double-prev') {
        if (arr3[arr3.length - 1] !== undefined && arr[i - 2] !== '--discard-next') {
          arr3.push(arr3[arr3.length - 1])
        };
      } else arr3.push(arr[i])
    }

    return arr3.filter((item) => item !== undefined);
    
  // remove line with error and write your code here
}

module.exports = {
  transform
};

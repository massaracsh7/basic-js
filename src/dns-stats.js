const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  let num = 0;
  domains.forEach((item) => {
    let arr = item.split('.').reverse();

    if (result.hasOwnProperty('.' + arr[0])) {
      result['.' + arr[0]] += 1;
    } else {
      result['.' + arr[0]] = 1;
    }

    if (result.hasOwnProperty('.' + arr[0] + '.' + arr[1])) {
      result['.' + arr[0] + '.' + arr[1]] += 1;
    } else result['.' + arr[0] + '.' + arr[1]] = 1;

    if (arr[2]) {
      if (result.hasOwnProperty('.' + arr[0] + '.' + arr[1] + '.' + arr[2])) {
        result['.' + arr[0] + '.' + arr[1] + '.' + arr[2]] += 1;
      } else result['.' + arr[0] + '.' + arr[1] + '.' + arr[2]] = 1;
    }

  })


  return result;
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};

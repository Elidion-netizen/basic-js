const { NotImplementedError } = require("../extensions/index.js");

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
  return str.split("").reduce(
    (acc, char, index, arr) => {
      if (char === arr[index + 1]) {
        acc.count++;
      } else {
        acc.result += acc.count > 1 ? acc.count + char : char;
        acc.count = 1;
      }
      return acc;
    },
    { result: "", count: 1 }
  ).result;
}

module.exports = {
  encodeLine,
};

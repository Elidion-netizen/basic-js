const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (typeof date === "undefined") {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error("Invalid date!");
  }
  try {
    date.getTime();
  } catch {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();
  if (month === undefined) {
    return "Unable to determine the time of year!";
  }

  if (month === 11 || month <= 1) return "winter";
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month <= 10) return "autumn";
  throw new Error("Invalid date!");
}

module.exports = {
  getSeason,
};

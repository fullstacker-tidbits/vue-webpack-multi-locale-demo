// eslint-disable-next-line
const properties = require(`./${process.env.LOCALE}`);

module.exports = function T(key, ...args) {
  return properties[key].replace(
    /{(\d)}/g,
    (match, num) => (typeof args[num] !== 'undefined' ? args[num] : match),
  );
};

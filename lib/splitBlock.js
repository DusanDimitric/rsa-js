var bigInt = require('big-integer')

module.exports = function (block) {
  ret = [];
  let b = block;
  while (b.greater(0)) {
    ret = [b.mod(1000).value, ...ret];
    b = b.divide(1000);
  }
  return ret;
}

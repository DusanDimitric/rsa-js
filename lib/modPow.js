var bigInt = require('big-integer')

module.exports = function modPow(b, e, m) {
  let res = bigInt("1");
  while (e.greater(0)) {
    res = e.mod(2).equals(1) ? res.multiply(b).mod(m) : res;
    e = e.divide(2);
    b = b.pow(2).mod(m);
  }
  return res;
}

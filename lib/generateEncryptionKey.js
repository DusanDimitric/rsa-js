var bigInt = require('big-integer');

module.exports = function(lambda) {
  const min = bigInt(2).pow(10);
  const max = bigInt(2).pow(14);
  while(true) {
    const randomNumber = bigInt.randBetween(min, max);
    if (bigInt.gcd(randomNumber, lambda).equals(1)) {
      return randomNumber;
    }
  }
}

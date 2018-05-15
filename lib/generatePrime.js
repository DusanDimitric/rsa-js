var bigInt = require('big-integer');

module.exports = function() {
  const min = bigInt(2).pow(1023).plus(1);
  const max = bigInt(2).pow(1024).minus(1);
  let randomNumber = bigInt.randBetween(min, max);
  while(true) {
    if (randomNumber.isProbablePrime(64)) {
      return randomNumber;
    }
    randomNumber = randomNumber.plus(1);
  }
}

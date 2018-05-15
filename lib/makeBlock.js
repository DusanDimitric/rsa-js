var bigInt = require('big-integer')

module.exports = function(nums) {
  tot = bigInt(0);
  for (let i=0; i < nums.length; i++) {
    tot = tot.times(1000).plus(nums[i]);
  }
  // console.log(tot.toString())
  return (tot);
}

module.exports = function (nums) {
  let trimmedNums = nums;
  let charCode = nums[nums.length-1];
  while(charCode == 32) {
    trimmedNums.pop();
    charCode = trimmedNums[trimmedNums.length-1];
  }
  let ret = '';
  for (let i=0; i < trimmedNums.length; i++) {
    ret = ret.concat(String.fromCharCode(trimmedNums[i]));
  }
  return(ret)
}

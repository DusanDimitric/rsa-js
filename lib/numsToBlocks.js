var makeBlock = require('./makeBlock');

module.exports = function (nums) {
  let ret = [];
  const numChunks = nums.length/10;
  let beginningOfChunk = 0;
  let endOfChunk = 10;
  for (let i=0; i < numChunks; i++) {
    chunk = nums.slice(beginningOfChunk, endOfChunk);
    ret = [...ret, makeBlock(chunk)];
    beginningOfChunk = endOfChunk;
    endOfChunk += 10;
  }
  return ret;
}

var splitBlock = require('./splitBlock');
var flatten = require('lodash/flatten');

module.exports = function (blocks) {
  ret = blocks.map(block => splitBlock(block));
  return flatten(ret);
}

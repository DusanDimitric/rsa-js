var numsToBlocks = require('./lib/numsToBlocks');
var textToNums = require('./lib/textToNums');
var modPow = require('./lib/modPow');
var numsToText = require('./lib/numsToText');
var blocksToNums = require('./lib/blocksToNums');
var bigInt = require('big-integer');
var generatePrime = require('./lib/generatePrime');
var generateEncryptionKey = require('./lib/generateEncryptionKey');

module.exports = {
  encryptRSA: function(text, publicKey) {
    const e = bigInt(publicKey.e);
    const n = bigInt(publicKey.n);
    const blocks = numsToBlocks(textToNums(text));
    return blocks.map(block => modPow(block, e, n).toString());
  },

  decryptRSA: function(crypt, privateKey) {
    const d = bigInt(privateKey.d);
    const n = bigInt(privateKey.n);
    const decrypt = crypt.map(block => {
      const blck = bigInt(block);
      return modPow(blck, d, n);
    });
    return numsToText(blocksToNums(decrypt));
  },

  generateKeyPair: function() {
    const p = generatePrime();
    const q = generatePrime();
    const n = p.times(q);
    const lambda = bigInt.lcm(p.minus(1), q.minus(1));
    const e = generateEncryptionKey(lambda);
    const d = e.modInv(lambda);
    return {
      private: {
        d: d,
        n: n,
      },
      public: {
        e: e,
        n: n,
      }
    }
  },
}

'use strict';

var expect = require('chai').expect;
var modPow = require('../lib/modPow');
var bigInt = require('big-integer')

describe('#modPow', function () {
  it('calculates the modulus of a power', function () {
    var result1 = modPow(bigInt("23842234823434"), bigInt("2483"), bigInt("3452343273"));
    var result2 = modPow(bigInt("2384223482123782934233434"), bigInt("7482"), bigInt("3452342347892343273"));
    var result3 = modPow(bigInt("238422342378492347239472389472839421823434"), bigInt("9284"), bigInt("2347781239042314089712380491723890412348"));
    expect(result1).to.deep.equal(bigInt("2158073356"));
    expect(result2).to.deep.equal(bigInt("1439464742031701127"));
    expect(result3).to.deep.equal(bigInt("157959146374561995803024071359209121264"));
  });
});

var textToNums = require('../lib/textToNums');

describe("#textToNums", function () {
  it('converts a string into an array of ASCII codes', function () {
    var res1 = textToNums("this is a test");
    var res2 = textToNums("this is another test *$(#*$@)");
    var res3 = textToNums("yet another te%st1_=2-0324904");
    expect(res1).to.deep.equal([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 32, 32, 32, 32, 32]);
    expect(res2).to.deep.equal([116, 104, 105, 115, 32, 105, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 115, 116, 32, 42, 36, 40, 35, 42, 36, 64, 41, 32]);
    expect(res3).to.deep.equal([121, 101, 116, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 37, 115, 116, 49, 95, 61, 50, 45, 48, 51, 50, 52, 57, 48, 52, 32]);
  });
});

var numsToText = require('../lib/numsToText');

describe("#numsToText", function () {
  it('converts an array of ASCII codes into a string', function () {
    var res1 = numsToText([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 32, 32, 32, 32, 32]);
    var res2 = numsToText([116, 104, 105, 115, 32, 105, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 115, 116, 32, 42, 36, 40, 35, 42, 36, 64, 41, 32]);
    var res3 = numsToText([121, 101, 116, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 37, 115, 116, 49, 95, 61, 50, 45, 48, 51, 50, 52, 57, 48, 52, 32]);
    expect(res1).to.equal("this is a test");
    expect(res2).to.equal("this is another test *$(#*$@)");
    expect(res3).to.equal("yet another te%st1_=2-0324904");
  });
});

var makeBlock = require('../lib/makeBlock');

describe("#makeBlock", function () {
  it('concatenates all of the numbers in a list into one number', function () {
    var res1 = makeBlock([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 32, 32, 32, 32, 32]);
    var res2 = makeBlock([116, 104, 105, 115, 32, 105, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 115, 116, 32, 42, 36, 40, 35, 42, 36, 64, 41, 32]);
    var res3 = makeBlock([121, 101, 116, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 37, 115, 116, 49, 95, 61, 50, 45, 48, 51, 50, 52, 57, 48, 52, 32]);
    var exp1 = bigInt("116104105115032105115032097032116101115116032032032032032032")
    var exp2 = bigInt("116104105115032105115032097110111116104101114032116101115116032042036040035042036064041032")
    var exp3 = bigInt("121101116032097110111116104101114032116101037115116049095061050045048051050052057048052032");
    expect(res1).to.deep.equal(exp1);
    expect(res2).to.deep.equal(exp2);
    expect(res3).to.deep.equal(exp3);
  });
});

var splitBlock = require('../lib/splitBlock');

describe("#splitBlock", function () {
  it('splits one huge number into individual components', function () {
    var block1 = bigInt("116104105115032105115032097032116101115116032032032032032032")
    var block2 = bigInt("116104105115032105115032097110111116104101114032116101115116032042036040035042036064041032")
    var block3 = bigInt("121101116032097110111116104101114032116101037115116049095061050045048051050052057048052032");
    var res1 = splitBlock(block1);
    var res2 = splitBlock(block2);
    var res3 = splitBlock(block3);
    expect(res1).to.deep.equal([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 32, 32, 32, 32, 32]);
    expect(res2).to.deep.equal([116, 104, 105, 115, 32, 105, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 115, 116, 32, 42, 36, 40, 35, 42, 36, 64, 41, 32]);
    expect(res3).to.deep.equal([121, 101, 116, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 37, 115, 116, 49, 95, 61, 50, 45, 48, 51, 50, 52, 57, 48, 52, 32]);
  });
});

var numsToBlocks = require('../lib/numsToBlocks');

describe("#numsToBlocks", function () {
  it('converts an array of numbers into an array of blocks', function () {
    var res1 = numsToBlocks([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 32, 32, 32, 32, 32]);
    var res2 = numsToBlocks([116, 104, 105, 115, 32, 105, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 115, 116, 32, 42, 36, 40, 35, 42, 36, 64, 41, 32]);
    var res3 = numsToBlocks([121, 101, 116, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 37, 115, 116, 49, 95, 61, 50, 45, 48, 51, 50, 52, 57, 48, 52, 32]);
    expect(res1).to.deep.equal([bigInt("116104105115032105115032097032"), bigInt("116101115116032032032032032032")]);
    expect(res2).to.deep.equal([bigInt("116104105115032105115032097110"), bigInt("111116104101114032116101115116"), bigInt("32042036040035042036064041032")]);
    expect(res3).to.deep.equal([bigInt("121101116032097110111116104101"), bigInt("114032116101037115116049095061"), bigInt("50045048051050052057048052032")]);
  });
});

var blocksToNums = require('../lib/blocksToNums');

describe("#blocksToNums", function () {
  it('converts an array of blocks into an array of numbers', function () {
    var res1 = blocksToNums([bigInt("116104105115032105115032097032"), bigInt("116101115116032032032032032032")]);
    var res2 = blocksToNums([bigInt("116104105115032105115032097110"), bigInt("111116104101114032116101115116"), bigInt("32042036040035042036064041032")]);
    var res3 = blocksToNums([bigInt("121101116032097110111116104101"), bigInt("114032116101037115116049095061"), bigInt("50045048051050052057048052032")]);
    expect(res1).to.deep.equal([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116, 32, 32, 32, 32, 32, 32]);
    expect(res2).to.deep.equal([116, 104, 105, 115, 32, 105, 115, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 115, 116, 32, 42, 36, 40, 35, 42, 36, 64, 41, 32]);
    expect(res3).to.deep.equal([121, 101, 116, 32, 97, 110, 111, 116, 104, 101, 114, 32, 116, 101, 37, 115, 116, 49, 95, 61, 50, 45, 48, 51, 50, 52, 57, 48, 52, 32]);
  });
});

var rsa = require('../');
var {encryptRSA, decryptRSA} = rsa;

const testPubKey1 = {
  e: "7979",
  n: "21393889968337618603363909818671712186635046122015253082283",
};

const testPubKey2 = {
  e: "5791",
  n: "1494995991057353594197966053153281848995488301811752123468378521803633\
34814091",
}

const testPrivKey = {
  d: "1756225406163464682963278209112526777062908342663025249341571",
  n: "8012324636663082788787909587950411577676826356790216905518741",
};

describe("#encryptRSA", function () {
  it('encrypts a message using RSA encryption given a public key', function () {
    var res1 = encryptRSA("This is a test message", testPubKey1);
    var res2 = encryptRSA("I wonder if this works", testPubKey2);
    expect(res1).to.deep.equal(["1540271960540504885000811039254330528727298930538728244108", "4770145831906568520575105241284990160513612879709063140576", "10003076543114039655293051292930708743046832565271156377740"]);
    expect(res2).to.deep.equal(["56881592661632524159399456907054154398478838286289425281705618962223816635017", "71762361101595159061690121115071948008917814534415976376635220897408840979017", "80732746909732673902176244949156328320011568123004510386576845554380226541007"]);
  });
});

describe("#decryptRSA", function () {
  it('decrypts an RSA encrypted message using the public key of the sender and the private key of the receiver', function () {
    var res1 = decryptRSA(
      ["5963510266060678585067778041770387621947890698479049104820474", "5887982762376228307102063902165401141530490922973153318951790", "789779255091759993338462904029109128068021298915628821089589", "2205441003294491961801994099039565332549329319231909746429762", "4467036016132006352294216018999381076284676283191486894500920"],
      testPrivKey
    );
    var res2 = decryptRSA(
      [
        "1894557757720140431261807233088679696491244007344359906381870",
        "330150383651761605249883404866996761226789642746840348717",
        "1018194756301313641748732924999746846417661939313920384728007",
        "4157528790555064585680555750331181496667798598556922509391462",
        "6869103447621772315398947313289720841582641708846431793605995",
        "4934592827513599292914460407293440298676923363960102179895077",
        "3411733119322872698559381210926115786929948355528413971050193",
        "167270427869675178721256258049410203205172601423469482631937"
      ],
      testPrivKey
    );
    expect(res1).to.equal("I hope you're having a GREAT time in Algorithms");
    expect(res2).to.equal("Great, Hannes! I'm received your message, and I'm glad the forum works as well.")
  });
});

var generatePrime = require('../lib/generatePrime');

describe("#generatePrime", function () {
  this.timeout(5000);
  it('generates a random 128-byte prime number', function () {
    var res1 = generatePrime();
    expect(res1.isProbablePrime(64)).to.equal(true);
  });
});

var generateEncryptionKey = require('../lib/generateEncryptionKey');

describe("#generateEncryptionKey", function () {
  it('generates an encryption key for a corresponding lambda', function () {
    const lambda = 2003081159165770697196977396980433618487460456973951168633496;
    var res1 = generateEncryptionKey(lambda);
    expect(bigInt.gcd(lambda, res1).equals(1)).to.equal(true);
  });
});

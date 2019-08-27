const BlockChain = require('./BlockChain');
const Block = require('./Block');
let myCoin = new BlockChain();
myCoin.addNewBlock(new Block({"From":"Obed","To":"XYZ","Amount":"$250"}));
myCoin.addNewBlock(new Block({"From":"Obed","To":"ABC","Amount":"$15"}));

// console.log(myCoin);
console.log("Is Valid: ",myCoin.isChainValid())
console.log(myCoin);
myCoin.chain[1].data = JSON.stringify({"From":"Obed","To":"Me","Amount":"$25"});
myCoin.chain[1].hash = myCoin.chain[1].calculateHash();
console.log(myCoin);
console.log("Is Valid: ",myCoin.isChainValid())
const BlockChain = require('./BlockChain');
const Block = require('./Block');
const Transaction = require('./Transaction')

let mynewCoin = new BlockChain();
const trs = process.argv.slice(2);
const l = trs.length/3;
var ct = 0;
for (var i=0;i<l;i++){
    var from = trs[ct++];
    var to = trs[ct++];
    var amount = trs[ct++];
    mynewCoin.createTransaction(new Transaction(from,to,Number(amount)));
}
// mynewCoin.createTransaction(new Transaction("Obed","Junias",100))
// mynewCoin.createTransaction(new Transaction("Obed","Junias",50))
// console.log(mynewCoin.pendingTransactions)
mynewCoin.minePendingTransactions("Myaddress")
console.log("Miner's Bal: ",mynewCoin.getBalanceOf("Myaddress"))

mynewCoin.minePendingTransactions("Myaddress")
console.log("Miner's Bal: ",mynewCoin.getBalanceOf("Myaddress"))
// console.log(mynewCoin);
mynewCoin.minePendingTransactions("Myaddress")
console.log("Miner's Bal: ",mynewCoin.getBalanceOf("Myaddress"))
// console.log(mynewCoin);
// console.log(mynewCoin.pendingTransactions)
// console.log(mynewCoin)

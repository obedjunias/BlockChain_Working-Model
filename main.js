const BlockChain = require('./BlockChain');
const Block = require('./Block');
const Transaction = require('./Transaction')

let mynewCoin = new BlockChain();
mynewCoin.createTransaction(new Transaction("Obed","Junias",100))
mynewCoin.createTransaction(new Transaction("Obed","Junias",50))

mynewCoin.minePendingTransactions("Myaddress")
console.log("My Bal: ",mynewCoin.getBalanceOf("Myaddress"))

mynewCoin.minePendingTransactions("Myaddress")
console.log("My Bal: ",mynewCoin.getBalanceOf("Myaddress"))
// console.log(mynewCoin);
mynewCoin.minePendingTransactions("Myaddress")
console.log("My Bal: ",mynewCoin.getBalanceOf("Myaddress"))
// console.log(mynewCoin);
console.log(mynewCoin.pendingTransactions)

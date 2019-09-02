
class Transaction{
    constructor(fromAddress,toAddress,coins){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.coins = coins;
    }
}
module.exports = Transaction;
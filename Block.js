const hash = require('crypto-js');

class Block{
    constructor(transactions,previoushash=" "){
        this.timestamp = JSON.stringify(Date.now());
        this.transactions = transactions;
        this.nonce = 0;
        this.previoushash = previoushash;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return hash.SHA256(this.timestamp+JSON.stringify(this.transactions)+this.previoushash+this.nonce).toString();
    }
    mineBlock(difficulty){
        for(var each of this.transactions){
            if(each.fromAddress === null){
                console.log("Now Mining Miner's Block...")
            }
        }
        console.log("Block with ",this.transactions[0].fromAddress," as its first transaction started...");
        while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block with ",this.transactions[this.transactions.length-1].fromAddress," as its last transaction mined successfully...");
    }
}

module.exports = Block;
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
        while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block Mined");
    }
}

module.exports = Block;
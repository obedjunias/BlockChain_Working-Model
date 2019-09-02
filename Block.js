const hash = require('crypto-js');

class Block{
    constructor(data,previoushash=" "){
        this.index = 0;
        this.timestamp = JSON.stringify(new Date());
        this.data = JSON.stringify(data);
        this.nonce = 0;
        this.previoushash = previoushash;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return hash.SHA256(this.index+this.timestamp+JSON.stringify(this.data)+this.previoushash+this.nonce).toString();
    }
    mineBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty+1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block Mined");
        return this.hash;
    }
}

module.exports = Block;
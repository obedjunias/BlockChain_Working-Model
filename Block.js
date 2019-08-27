const hash = require('crypto-js');

class Block{
    constructor(data,previoushash=" "){
        this.index = 0;
        this.timestamp = JSON.stringify(new Date());
        this.data = JSON.stringify(data);
        this.previoushash = previoushash;
        this.hash = this.calculateHash();
    }
    calculateHash(){
        return hash.SHA256(this.index+this.timestamp+JSON.stringify(this.data)+this.previoushash).toString();
    }
}

module.exports = Block;
const Block = require('./Block');
class BlockChain{
    constructor(){
        this.chain = [this.createFirstBlock()];
        this.difficulty = 4;
    }
    createFirstBlock(){
        let firstBlock = new Block("First Block","0000")
        // //firstBlock.hash = firstBlock.calculateHash();
        // firstBlock.hash = firstBlock.mineBlock(this.difficulty);
        return firstBlock;
    }
    lastBlock(){
        return this.chain[this.chain.length-1];
    }
    addNewBlock(myblock){
        myblock.index = this.lastBlock().index+1;
        myblock.timestamp = JSON.stringify(new Date());
        myblock.data = JSON.stringify(myblock.data);
        myblock.previoushash = this.lastBlock().hash;
        myblock.hash = myblock.mineBlock(this.difficulty);
        this.chain.push(myblock);
    }
    isChainValid(){
        for (var i=1;i<this.chain.length;i++){
            if(this.chain[i].hash !== this.chain[i].calculateHash()){
                return false;
            }
            if(this.chain[i-1].hash !== this.chain[i].previoushash)
            {
                return false;
            }
        }
        return true;
    }
}

module.exports = BlockChain;
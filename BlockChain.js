const Block = require('./Block');
const Transaction = require('./Transaction')
class BlockChain{
    constructor(){
        this.chain = [this.createFirstBlock()];
        this.difficulty = 4;
        this.pendingTransactions = [];
        this.miningReward = 10;
    }
    createFirstBlock(){
        let firstBlock = new Block([],"0000")
        return firstBlock;
    }
    lastBlock(){
        return this.chain[this.chain.length-1];
    }
    minePendingTransactions(miner_address){
        let block = new Block(this.pendingTransactions);
        block.previoushash = this.lastBlock().hash;
        block.mineBlock(this.difficulty);
        console.log("Mining Success");
        this.chain.push(block);

        this.pendingTransactions = [new Transaction(null,miner_address,this.miningReward)];
    }


    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOf(address){
        let bal = 0;
        for (const block of this.chain){
            for (const trans of block.transactions){
                if(trans.fromAddress === address){
                    bal = bal- trans.coins;
                }
                if(trans.toAddress === address){
                    bal = bal + trans.coins;
                }
            }
        }
        return bal;
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
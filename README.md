# BlockChain Working Model

## This was my first prototype created after getting to know how Blockchain network really works

### Technologies/Tools Used

* Node.js to run javascript

### How to run??

> **Clone the [repository](https://github.com/obedjunias/BlockChain-WM.git)**
> **run** >> ***node main.js <from address1> <to address1> <amount1> <from address2> <to address2> <amount2> <...><...><...>**
>> example: node main.js Alice Bob 10 Sender Reciever 20
**OUTPUT:-**
```
Block with  Alice  as its first transaction started...
Block with  Sender  as its last transaction mined successfully...
Mining Success
Miner's Bal:  0
Now Mining Miner's Block...
Block with  null  as its first transaction started... 
Block with  null  as its last transaction mined successfully...
Mining Success
Miner's Bal:  10
Now Mining Miner's Block...
Block with  null  as its first transaction started...
Block with  null  as its last transaction mined successfully...
Mining Success
Miner's Bal:  20
```
##### Note: Here null refers to miners address since he is mining his own block so from address is null there

### Methods

#### main.js

* This file when run first basically creates the first block called as the genesis block in crypto world also referred to as block 0.
* It then processes the command line arguments passed by the user where there are three arguments present for a single transaction and such multiple transactions can be present.
* It then processes those transaction using the proof-of-work concept and creates a block and puts it at the end of the last block already present.
* It is also used to mine the miners block which gets executed after miner adds a new block onto the network. **Since he gets a reward i.e. he is rewarded a new cryptocoin after he succesfully mines a block and adds it to the network.**

#### Block.js

* As the name says, this creates blocks to hold the transactions.
* Not only this, it is also responsible for doing the most important thing which makes block chain most secure yeah, you guessed it right... It is responsible for calculating the hash value.

#### Transaction.js

* It holds all the fields a transaction should contain.
    1. The From Address
    2. The To Address
    3. And The number of Coins to Transfer

#### BlockChain.js

Here comes the core part of this whole network which includes creating blocks from the pending transaction list and adding it to the chain once a proper hash value is found by the miner.
And ya, it earns the miner a new crypto coin....

* We even have the getBalanceOf method which returns person's crypto wallet balance (yet to be implemented using the command line) which can be run by calling it from the main by passing the address as its parameter.
* We can even verify the validity of the blockchain using the isChainValid() method which returns a bool value based on its state.

#### Still Much More to Go....

[ ] Planning to create a UI for the same and add more functionalities once i get to know the whole indepth working of the blockchain.

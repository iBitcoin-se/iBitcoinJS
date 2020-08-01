const Base = require('./Base');


class iBitcoin {
    constructor(currency) {
        if (!['btc','bsv','bch','ltc'].includes(currency)) throw new Error('Currency was not found');
        this.currency = currency;
    }

     async createAddress(description){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/createAddress` ,{description});
    }

    async addressBalance(address){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/addressBalance` , {address});
    }

    async privateKeyBalance(wif){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/addressBalance` , {wif});
    }
    async getTransaction(txid){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/getTransaction` , {txid});
    }
    async addressTransactions(address,page){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/addressTransactions` , {address,page});
    }
    async  walletBalance(){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/walletBalance`);
    }
    async send(amount,password,address,username){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/send` , {amount,password,address,username});
    }
    async sweep(address,wif){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/sweepPrivateKey` , {address,wif});
    }
    async push(hex){
        return Base.makeRequest(`${process.env.API_LINK}${this.currency}/push` , {hex});
    }

}

module.exports = iBitcoin;
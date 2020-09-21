# iBitcoin-JS API

This nodejs module is the official reference client for the iBitcoin.se payments
API. To use this, you will need iBitcoin.se API key
from <a href="https://iBitcoin.se" target="_blank">ibitcoin.se</a>. Go ahead, sign
up :)

## Installation

Install the package using npm:

    $ npm install ibitcoin-se-api --save
    

## Usage

It's super easy to get started. In your node shell, do:

```
const iBitcoin = require('ibitcoin');

   process.env.API_KEY = 'YOUR_API_KEY_FROM_YOUR_IBITCOIN_WALLET';
   process.env.SHOW_ERROR_TO_USER = 'false';
   process.env.API_LINK = 'https://backend.ibitcoin.se/api/';

   (async function () {
     const ibitcoin = new iBitcoin('bch');
      console.log(await ibitcoin.createAddress());
      console.log(await ibitcoin.addressBalance('SOME_ADDRESS')); // method works only with addresses created on iBitcoin.se
      console.log(await ibitcoin.walletBalance());
      console.log(await ibitcoin.privateKeyBalance('WIF_PRIVATE_KEY'));
      console.log(await ibitcoin.getTransaction('TXID')); // Works with any TXID
       console.log(await ibitcoin.send(0.0002,'your_password',null , 'admin'));
   })();

```

For more information, see [Node.js API Docs](https://iBitcoin.se/api/).
This client provides a mapping for all methods listed on the iBitcoin.se API
site.


const iBitcoin = require('../lib/ibitcoin');

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


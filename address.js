const bitcoin = require('bitcoinjs-lib')
let n = bitcoin.networks.testnet
getRandomAddress();

function getRandomAddress() {
    const keyPair = bitcoin.ECPair.makeRandom({ network: n })
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: n })
    const url = `Address: ${address}`
    console.log(url)
    console.log("WIF: " + keyPair.toWIF())
    return address;
}
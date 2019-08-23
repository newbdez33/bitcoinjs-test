const bitcoin = require('bitcoinjs-lib')
const networks = require('bitcoinjs-lib').networks


//let address = getRandomAddress();
const jacky = bitcoin.ECPair.fromWIF('cTSEdFDCUVT9pRSZuwHQrf2RmnAjwUi5b14LdjMG2q7Dyb1L29Af', bitcoin.networks.regtest)
const p2pk = bitcoin.payments.p2pk({ pubkey: jacky.publicKey, network: bitcoin.networks.regtest })

const txb = new bitcoin.TransactionBuilder(bitcoin.networks.regtest)

txb.addInput('63c7895673f1301409fea6597b8a56a67ad894458afb983dc7bc9848c715c2fe', 0, null, p2pk.output);
txb.addOutput("mxfCEo2Jc5pPvvmfe4hFgtN2dks9mBKrwP", 1249997000);

txb.sign(0, jacky)

console.log("bitcoin-cli sendrawtransaction " + txb.build().toHex());

function getRandomAddress() {
    const keyPair = bitcoin.ECPair.makeRandom({ network: networks.regtest })
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey, network: networks.regtest })
    const url = `https://btc.com/${address}`
    console.log(url)
    console.log("WIF: " + keyPair.toWIF())
    return address;
}
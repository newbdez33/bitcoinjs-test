const bitcoin = require('bitcoinjs-lib')
const base58 = require('bs58')

let n = bitcoin.networks.testnet

//n4Ep9S7tzbUSBJaZfqzS1HC2rRf2F3Vksh
const jacky = bitcoin.ECPair.fromWIF('cNi9TvdqNkhSupbvoCp59UG3h2Cm2MRYLPPA1E78Q3rMoACpQkLS', n)

// const p2pk = bitcoin.payments.p2pk({ pubkey: jacky.publicKey, network: n })
// const p2pkh = bitcoin.payments.p2pkh({ pubkey: jacky.publicKey, network: n })
const p2sh = bitcoin.payments.p2sh({ pubkey: jacky.publicKey, network: n })
console.log(p2sh.address);

const txb = new bitcoin.TransactionBuilder(n)

txb.addInput('4f3818f9aee58046f42ef4cd0a09810213b4e0b64c9fe679f08e0c81b433101e', 0, null);
txb.addOutput("mkbNHmo4KVQWguAf8d3Vjh2ATqHPudwU8Y", 100000);
txb.addOutput("n4Ep9S7tzbUSBJaZfqzS1HC2rRf2F3Vksh", 899850);   //here we return change to the old address, but it should be a new one.

txb.sign(0, jacky)

console.log("bitcoin-cli sendrawtransaction " + txb.build().toHex());
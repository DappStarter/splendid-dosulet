require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain mistake inflict problem bone trigger'; 
let testAccounts = [
"0xdaebb9140cf156aba0c4019024510043b82dced17531742b94fa12f05dad7582",
"0x4a30cc1867b46f7319a310cea67097a5a87c58dfa39c3073135ed3e4de5d7844",
"0x959f4a5dbd27d8f91180b7becd7bcdf906a020cd94d135d51576429fe958a0ed",
"0x46e026f97097e2e9f397ba947ceac5d5a9d39a383de957acb42824c69f86a026",
"0x2062d0bdbde42b91fd4aca0b006239f100c953a9c5439817cc0bb75c2e756b2a",
"0xfcd3f7fa153b4b7416a70c7e4d43b47d2a131bd9730e716342d494abeda7e10f",
"0xe149b21eb6161dbcce1b64cb6dd5c6fe61e4d7dd68c32ca16a86b140b01b38bb",
"0xbcea39c13c43f6cbb9f60c816b37eeb2db8e053b61e1c686946fad2277ac9772",
"0x3f0f432b10c43a55162214afaab7259865c1edbd48bd409a17fb12f3d5693268",
"0x1af23584ac6c23a1dbff1415fa7e75bbd7ded77736989936d379d6e53f96c851"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


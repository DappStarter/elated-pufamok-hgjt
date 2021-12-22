require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift return stereo slow hope kitten slot gate'; 
let testAccounts = [
"0xe8d4914f5727c93bcefddbc8534d4d8085e9401312a9907f33420e4197149e7b",
"0x56d96348fd8f20afc29d0617c02eb9574b0058994611d1ddd3a2d386313a9bd1",
"0x90d4272cde02b86188872d830d022e3f733f3a4bb2899185fe29b62aad6b9e15",
"0x652c0087753e061f0582d6d759b49f4e131e4cee130c8b6645871aa5a3f946cd",
"0x94ad0c552b86d51a297a3f19a4bd7789d79e3cf74f55f0be7d62b0558bfd0416",
"0x141539fa9514e9b4bd04d77a03d55de4250217b84e38c62b943055183519a05e",
"0x3cfe8be27a0750e4ae826054672959add271ff984a6548784b5141293586f503",
"0x213d895d3fca02cb603f610887a0ec3917be8b79c3b2b3d0630f9aef1d800a6c",
"0x778ea8a920d053d251f53943b10cccba6ca98e6a4b4c38c3d3bbc2230492c3f4",
"0x24dbe51bf34a22412984e60263f4dc9e4ea469557fc94e6cb3e15d37a9f7cbd9"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



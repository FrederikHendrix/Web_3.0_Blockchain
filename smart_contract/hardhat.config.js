//https://eth-goerli.g.alchemy.com/v2/lPqOB1hduwePkUJt_m9Yh5m4eLXwmVWW

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli : {
      url : 'https://eth-goerli.g.alchemy.com/v2/lPqOB1hduwePkUJt_m9Yh5m4eLXwmVWW',
      accounts: ['91ec3c2d94712c0b30349577735db17fe644adfe62e41851edad51329152a916']
    }
  }
}
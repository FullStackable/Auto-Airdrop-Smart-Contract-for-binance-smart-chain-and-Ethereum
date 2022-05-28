const Token = artifacts.require("Token");
const Airdrop = artifacts.require("Airdrop");

module.exports = function(deployer) {
  await deployer.deploy(Token);
  const TOKEN_CONTRACT = await Token.deployed();

  console.log('TOKEN_CONTRACT----------->', TOKEN_CONTRACT.address)

  await deployer.deploy(Airdrop, TOKEN_CONTRACT.address);
};

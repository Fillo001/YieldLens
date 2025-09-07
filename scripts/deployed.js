const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with:", deployer.address);

  // Deploy MockERC20
  const Token = await hre.ethers.getContractFactory("MockERC20");
  const token = await Token.deploy();
  await token.deployed();
  console.log("MockERC20 deployed to:", token.address);

  // Deploy YieldPool
  const Pool = await hre.ethers.getContractFactory("YieldPool");
  const pool = await Pool.deploy(token.address);
  await pool.deployed();
  console.log("YieldPool deployed to:", pool.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

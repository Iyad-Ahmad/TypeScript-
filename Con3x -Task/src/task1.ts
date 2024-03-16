import Web3 from 'web3';
import { AbiItem } from 'web3-utils';

const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID') as any;

export async function getUSDTBalance(address: string, contractABI: AbiItem[]) {
  const contractAddress = 'https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7'; // USDT contract address
  const usdtContract = new web3.eth.Contract(contractABI, contractAddress);
  const balance = await usdtContract.methods.balanceOf(address).call();
  console.log('USDT balance:', balance);
  return balance;
}

export async function getLastBlockNumber() {
  const blockNumber = await web3.eth.getBlockNumber();
  return blockNumber;
}

const usdtContractABI: AbiItem[] = []; // Define the USDT contract ABI

async function main() {
  const usdtBalance = await getUSDTBalance('0xYOUR_ADDRESS', usdtContractABI);
  console.log('USDT Balance:', usdtBalance);

  const lastBlockNumber = await getLastBlockNumber();
  console.log('Last Block Number:', lastBlockNumber);
}

main();

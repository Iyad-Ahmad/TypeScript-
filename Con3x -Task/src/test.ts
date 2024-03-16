import { getLastBlockNumber, getUSDTBalance } from './task1';

describe('Ethereum functions', () => {
  test('getLastBlockNumber should return a valid block number', async () => {
    // Mock the web3 instance and simulate the result
    const mockWeb3 = {
      eth: {
        getBlockNumber: jest.fn().mockResolvedValueOnce(1000000),
      },
    }; 

    // Call the function
    const blockNumber = await getLastBlockNumber();

    // Check the result
    expect(blockNumber).toBe(1000000);
    expect(mockWeb3.eth.getBlockNumber).toHaveBeenCalledTimes(1);
  });

  test('getUSDTBalance should return a valid balance', async () => {
    // Mock the web3 and usdtContract instances and simulate the result
    const mockWeb3 = {
      eth: {
        Contract: jest.fn().mockReturnValueOnce({
          methods: {
            balanceOf: jest.fn().mockResolvedValueOnce('1000000000000000000'), // 1 USDT
          },
        }),
      },
    };
 
    // Call the function
    const balance = await getUSDTBalance('0xTEST_ADDRESS', mockWeb3?);

    // Check the result
    expect(balance).toBe('1000000000000000000');
    expect(mockWeb3.eth.Contract).toHaveBeenCalledWith(expect.any(Array), '0xdac17f958d2ee523a2206206994597c13d831ec7');
    expect(mockWeb3.eth.Contract().methods.balanceOf).toHaveBeenCalledWith('0xTEST_ADDRESS');
  });
});

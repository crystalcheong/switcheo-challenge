import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { BigNumberish } from "@ethersproject/bignumber";

const rpc: string = "https://bsc-dataseed.binance.org/";
const tokenAddress: string = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c";
const wallet: string[] = [
  "0x123d475e13aa54a43a7421d94caa4459da021c77",
  "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
  "0xfe808b079187cc460f47374580f5fb47c82b87a5",
];

const provider: JsonRpcProvider = new JsonRpcProvider(rpc, {
  name: "binance",
  chainId: 56,
});

const ABI: string[] = [
  "function balanceOf(address account) view returns (uint256)",
];

const contract: Contract = new Contract(tokenAddress, ABI, provider);
wallet.forEach((address) => {
  contract
    .balanceOf(address)
    .then((balance: BigNumberish) => {
      const fmtBalance = formatUnits(balance, 8);
      console.log(address, fmtBalance);
    })
    .catch((error: any) => {
      console.error(error);
    });
});

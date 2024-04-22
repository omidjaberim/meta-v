import tokenAbi from "./tokenAbi.json";
import preSaleAbi from "./preSaleAbi.json";
import usdtAbi from "./usdtAbi.json";
import usdcAbi from "./usdcAbi.json";
import stakingAbi from "./stakingAbi.json";
import { mainnet } from 'wagmi/chains' 

import {
  tokenAddress,
  preSaleAddress,
  usdtAddress,
  usdcAddress,
  stakingAddress,
} from "./environment";

import { readContract, writeContract } from "wagmi/actions";
import { waitForTransaction } from "@wagmi/core";

export const tokenReadFunction = async (functionName, args) => {
  try{
  const data = await readContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
    chainId: mainnet.id 
  });
  return data;
}catch(e){
  console.log(e,"errorrs")
}
};

export const preSaleReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName,
    args,
  });
  return data;
};

export const stakingReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: stakingAddress,
    abi: stakingAbi,
    functionName,
    args,
  });
  return data;
};

export const usdtReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: usdtAddress,
    abi: usdtAbi,
    functionName,
    args,
  });
  return data;
};

export const usdcReadFunction = async (functionName, args) => {
  const data = await readContract({
    address: usdcAddress,
    abi: usdcAbi,
    functionName,
    args,
  });
  return data;
};

/// write functions
export const tokenWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: tokenAddress,
    abi: tokenAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const preSaleWriteFunction = async (functionName, args, value) => {
  const { hash } = await writeContract({
    address: preSaleAddress,
    abi: preSaleAbi,
    functionName,
    args,
    value,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const stakingWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: stakingAddress,
    abi: stakingAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const usdtWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: usdtAddress,
    abi: usdtAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

export const usdcWriteFunction = async (functionName, args) => {
  const { hash } = await writeContract({
    address: usdcAddress,
    abi: usdcAbi,
    functionName,
    args,
  });
  const receipt = await waitForTransaction({ hash });
  return receipt;
};

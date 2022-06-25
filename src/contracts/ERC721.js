import { useCall, useContractFunction } from "@usedapp/core"
import { Contract, utils } from "ethers"

export const erc721Address = ''

export const erc721Abi = []

export const erc721Interface = new utils.Interface(erc721Abi)

export const erc721Contract = new Contract(erc721Address, erc721Interface)

export const useErc721Function = (fnName, options) => useContractFunction(erc721Contract, fnName, options)

export const useErc721Call = (fnName, args = []) => useCall({
    contract: erc721Contract,
    method: fnName,
    args: args
})
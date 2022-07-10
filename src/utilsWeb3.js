import { useConfig, useContractFunction as _useContractFunction, useEthers } from "@usedapp/core";

export const useContractFunction = (...args) => {
    const { send, ...rest } = _useContractFunction(...args)
    const { networks } = useConfig()
    const { chainId, switchNetwork, active } = useEthers()
    const _send = async (...sendArgs) => {
        if (!active) throw new Error('Please try again.')
        if (networks[0].chainId !== chainId) {
            const a = await switchNetwork(networks[0].chainId)
        }
        return send(...sendArgs)
    }
    return { send: _send, ...rest }
}
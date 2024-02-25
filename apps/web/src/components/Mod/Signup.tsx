import {
  LENS_PERMISSIONLESS_CREATOR_ABI,
  TAPE_SIGNUP_PROXY_ABI
} from '@tape.xyz/abis'
import {
  LENS_PERMISSIONLESS_CREATOR_ADDRESS,
  POLYGON_CHAIN_ID,
  TAPE_SIGNUP_PROXY_ADDRESS
} from '@tape.xyz/constants'
import { Button } from '@tape.xyz/ui'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import type { Address } from 'viem'
import { formatUnits } from 'viem'
import { useBalance, useReadContract, useWriteContract } from 'wagmi'

import RelayerAddress from './RelayerAddress'

const RELAYER_ADDRESSES = [
  '0xc4407B6dBC56a6cF06d9B6E637Ae12bf13481a38',
  '0xA8B6A140b53412E5F66a4a0944534059864F9A3f',
  '0x684bf2D496ecd6D1194cf510E2B623721c4A12e5'
]

const Signup = () => {
  const [loading, setLoading] = useState(false)

  const { data } = useReadContract({
    abi: LENS_PERMISSIONLESS_CREATOR_ABI,
    address: LENS_PERMISSIONLESS_CREATOR_ADDRESS,
    args: [TAPE_SIGNUP_PROXY_ADDRESS],
    functionName: 'getCreditBalance',
    query: { refetchInterval: 2000 }
  })
  const credits = String(data)

  const { data: totalCountViaCard } = useReadContract({
    abi: TAPE_SIGNUP_PROXY_ABI,
    address: TAPE_SIGNUP_PROXY_ADDRESS,
    functionName: 'totalCountViaCard',
    query: { refetchInterval: 2000 }
  })
  const { data: totalCountViaCrypto } = useReadContract({
    abi: TAPE_SIGNUP_PROXY_ABI,
    address: TAPE_SIGNUP_PROXY_ADDRESS,
    functionName: 'totalCountViaCrypto',
    query: { refetchInterval: 2000 }
  })

  const { data: contractBalance } = useBalance({
    address: TAPE_SIGNUP_PROXY_ADDRESS,
    chainId: POLYGON_CHAIN_ID,
    query: {
      refetchInterval: 2000
    }
  })
  const balance =
    contractBalance && parseFloat(formatUnits(contractBalance.value, 18))

  const { writeContractAsync } = useWriteContract({
    mutation: {
      onSuccess: () => {
        toast.success('Funds withdrawn')
        setLoading(false)
      },
      onError: (error) => {
        toast.error(error.message)
        setLoading(false)
      }
    }
  })

  const withdraw = async () => {
    setLoading(true)
    try {
      await writeContractAsync({
        abi: TAPE_SIGNUP_PROXY_ABI,
        address: TAPE_SIGNUP_PROXY_ADDRESS,
        functionName: 'withdrawFunds'
      })
    } catch {}
  }

  return (
    <div className="space-y-4 p-5">
      <ul>
        <li>Credits: {credits}</li>
        <li>Total Signups Card: {String(totalCountViaCard)}</li>
        <li>Total Signups Crypto: {String(totalCountViaCrypto)}</li>
        <li>Total Balance: {balance}</li>
      </ul>
      <div className="flex">
        <Button disabled={loading} loading={loading} onClick={() => withdraw()}>
          Withdraw funds
        </Button>
      </div>
      <div>
        <h2 className="mb-2 font-bold">Relayers</h2>
        <ul>
          {RELAYER_ADDRESSES.map((address) => (
            <RelayerAddress key={address} address={address as Address} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Signup

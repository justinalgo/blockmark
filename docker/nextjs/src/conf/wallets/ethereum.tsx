import '@rainbow-me/rainbowkit/styles.css'
import { getDefaultWallets } from '@rainbow-me/rainbowkit'
import { configureChains, createClient } from 'wagmi'
import { mainnet, polygon, optimism, arbitrum, avalanche } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'


const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum, avalanche],
  [
    alchemyProvider({ apiKey: process?.env?.NEXT_PUBLIC_ALCHEMY_API_KEY ?? '' }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Blockmark',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export {
  chains,
  wagmiClient,
}
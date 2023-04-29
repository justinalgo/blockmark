import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { WagmiConfig } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'

import BaseLayout from '@/components/layouts/base'
import { chains, wagmiClient } from '@/conf/wallets/ethereum'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

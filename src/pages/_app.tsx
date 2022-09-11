import { Box, BoxProps, ChakraProvider } from '@chakra-ui/react';
import {
    getDefaultWallets, lightTheme, RainbowKitProvider
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { AppProps } from 'next/app';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import { AnnouncementBanner } from '../components/AnnouncementBanner';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import theme, { rainbowKitTheme } from '../theme';

const { chains, provider } = configureChains([chain.mainnet], [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
]);

const { connectors } = getDefaultWallets({
    appName: 'Ethereum Dapp Starter',
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider
                    chains={chains}
                    theme={lightTheme(rainbowKitTheme)}
                >
                    <Navbar />
                    <Box>
                        <AnnouncementBanner />
                        <Component {...pageProps} />
                    </Box>
                    <Footer />
                </RainbowKitProvider>
            </WagmiConfig>
        </ChakraProvider>
    );
}

export default MyApp;

import { extendTheme } from '@chakra-ui/react';
import '@fontsource/space-mono';
import { ThemeOptions } from '@rainbow-me/rainbowkit/dist/themes/baseTheme';

const fonts = {
    heading: '\'Space Mono\', monospace',
    body: '\'Space Mono\', monospace'
};

const breakpoints = {
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
};

const theme = extendTheme({
    semanticTokens: {
        colors: {
            text: {
                default: '#16161D',
            },
            heroGradientStart: {
                default: '#7928CA',
            },
            heroGradientEnd: {
                default: '#FF0080',
            },
        },
    },
    colors: {
        black: '#16161D',
    },
    components: {
        Button: {
            baseStyle: {
            },
            variants: {
                solid: {
                    boxShadow: 'md'
                },
                link: {
                    bgGradient: 'linear(to-l, heroGradientStart, heroGradientEnd)',
                    bgClip: 'text',
                },
            },
            defaultProps: {
                size: 'lg'
            }
        }
    },
    fonts,
    breakpoints,
    shadows: {
        'xl-top': `0 -10px 15px -3px rgba(0, 0, 0, 0.1),
                   0 -4px 6px -2px rgba(0, 0, 0, 0.05);`
    }
});

export const rainbowKitTheme: ThemeOptions = {
    accentColor: '#EDF2F7',
    accentColorForeground: '#1A202C',
    borderRadius: 'small',
};

export default theme;

import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const Hero: React.FC = () => {

    return (
        <>
            <Container maxW='3xl'>
                <Stack
                    py={{ base: 20, md: 36 }}
                    textAlign='center'
                    spacing={{ base: 8, md: 14 }}>
                    <Heading
                        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                        fontWeight={600}
                        lineHeight='110%'
                    >
                        Believe in the<br />
                        <Text
                            as='span'
                            bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
                            bgClip="text"
                        >
                            power of wagmi
                        </Text>
                    </Heading>
                    <Text color='gray.500'>
                        Users own their own data, not corporations. Global digital transactions are secure. Online exchanges of information and value are decentralized.
                    </Text>
                    <Stack
                        pos='relative'
                        align='center'
                        direction='column'
                        alignSelf='center'
                        spacing={3}
                    >
                        <ConnectButton />
                        <Button size='sm' variant='link'>
                            Learn more
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
};

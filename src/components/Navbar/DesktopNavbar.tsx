import { Box, Container, Flex, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';
import { Logo } from './Logo';
import { NAV_ITEMS } from './navItems';

export const DesktopNavbar: React.FC = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');

    return (
        <Container maxW='100%'>
            <Flex
                align='center'
                minH='60px'
                px={4}
                py={2}
            >
                <Flex
                    align='center'
                    justify={{ base: 'center', md: 'space-between' }}
                    flex={{ base: 1 }}
                >
                    <Logo />
                    <HStack alignItems='center' spacing={8}>
                        {NAV_ITEMS.map((navItem) => (
                            <Link
                                key={navItem.label}
                                pt='4px'
                                color={linkColor}
                                fontSize={'md'}
                                fontWeight={600}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}
                                href={navItem.href ?? '#'}>
                                {navItem.label}
                            </Link>
                        ))}
                        <Box>
                            <ConnectButton />
                        </Box>
                    </HStack>
                </Flex>
            </Flex>
        </Container>
    );
};

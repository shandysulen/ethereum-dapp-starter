import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Collapse, Container, Flex, IconButton, Link, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NavItem, NAV_ITEMS } from './navItems';

export const MobileNavBar: React.FC = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Container maxW='95%'>
            <Flex
                align='center'
                justify='space-between'
                flex={{ base: 1, md: 'auto' }}
                display={{ base: 'flex', md: 'none' }}
                ml={{ base: -2 }}
            >
                <Logo />
                <IconButton
                    aria-label='Toggle Navigation'
                    icon={
                        isOpen ? <CloseIcon boxSize={3} /> : <HamburgerIcon boxSize={5} />
                    }
                    onClick={onToggle}
                    variant='ghost'
                />
            </Flex>
            <Collapse animateOpacity in={isOpen}>
                <Stack
                    display={{ md: 'none' }}
                    p={4}
                    bg={useColorModeValue('white', 'gray.800')}>
                    {NAV_ITEMS.map((navItem) => (
                        <MobileNavItem key={navItem.label} {...navItem} />
                    ))}
                </Stack>
            </Collapse>
        </ Container>
    );
};

const MobileNavItem = ({ label, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Stack onClick={onToggle} spacing={4}>
            <Flex
                as={Link}
                align={'center'}
                justify={'space-between'}
                py={2}
                _hover={{
                    textDecoration: 'none',
                }}
                href={href ?? '#'}>
                <Text
                    color={useColorModeValue('gray.600', 'gray.200')}
                    fontWeight={600}>
                    {label}
                </Text>
            </Flex>

            <Collapse animateOpacity in={isOpen} style={{ marginTop: '0!important' }}>
                <Stack
                    align={'start'}
                    mt={2}
                    pl={4}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    borderLeft={1}>
                </Stack>
            </Collapse>
        </Stack>
    );
};

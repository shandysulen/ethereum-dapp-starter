import { Box, Button, Center, HStack, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { pagePaddingX } from '../constants';

interface BaseSitemapLinkProps {
  readonly name: string;
}

interface UrlSitemapLinkProps extends BaseSitemapLinkProps {
  readonly kind: 'url';
  readonly url: string;
  readonly target?: '_self' | '_blank';
}

interface OnClickSitemapLinkProps extends BaseSitemapLinkProps {
  readonly kind: 'onClick';
  readonly onClick: () => void;
}

type SitemapLinkProps = UrlSitemapLinkProps | OnClickSitemapLinkProps;

const SitemapLink: React.FC<SitemapLinkProps> = ({ name, ...otherProps }) => {

    return (
        <Text as="small" _hover={{ color: 'emerald' }} transition="all 0.2s">
            {otherProps.kind === 'url' ?
                otherProps.target === '_blank' ? (
                    <ChakraLink href={otherProps.url} isExternal target="_blank">{name}</ChakraLink>
                ) : (
                    <Link href={otherProps.url}><a >{name}</a></Link>
                ) : (
                    <Text _hover={{ color: 'emerald' }} transition="0.2s all" onClick={otherProps.onClick} role="button" tabIndex={0}>{name}</Text>
                )}
        </Text>
    );
};

/** To be shown at the bottom of every page */
export const Footer: React.FC = () => {
    return (
        <Box
            as='footer'
            pt="20px"
            pb="8px"
            px={pagePaddingX}
            shadow='xl-top'
        >
            <VStack
                mb="8px"
                pb="8px"
                borderColor="gray.200"
                borderBottom="2px"
            >
                <Text
                    as="small"
                    align="center"
                    fontSize="xs"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi deserunt est ducimus vel aliquam ipsum esse sed adipisci velit
                    inventore iste in suscipit exercitationem assumenda magnam, minima
                    perferendis laborum blanditiis. Odit illum harum iure atque.
                    Necessitatibus eos placeat ut aspernatur iusto harum, dicta, soluta
                    suscipit ab deleniti dolorem quibusdam, in fuga veritatis delectus
                    esse sed iste. Commodi ipsa recusandae explicabo cupiditate illo
                    voluptatem, aut quasi culpa officiis quae!
                </Text>
                <HStack justify="center" wrap="wrap">
                    <SitemapLink kind="url" url="#" name="About" />
                    <Text as="span">•</Text>
                    <SitemapLink kind="url" url="#" name="Contact Us" />
                </HStack>
            </VStack>
            <Center>
                <Text
                    as="small"
                    mt="4px"
                >
                    Made with 💖 by
                    <Button
                        as='a'
                        href="https://twitter.com/shando_eth"
                        size='sm'
                        target='_blank'
                        variant='link'
                    >
                        @shando_eth
                    </Button>
                </Text>
            </Center>
        </Box>
    );
};

import { Alert, AlertTitle } from '@chakra-ui/react';
import { pagePaddingX } from '../constants';

export const AnnouncementBanner: React.FC = () => {
    return (
        <Alert
            justifyContent='center'
            px={pagePaddingX}
            bgGradient='linear(to-r, heroGradientStart, heroGradientEnd)'
            shadow="md"
        >
            <AlertTitle
                as='p'
                color='white'
                fontWeight="bold"
            >
                🎉 Ethereum Dapp Starter just launched 🎉
            </AlertTitle>
        </Alert>
    );
};

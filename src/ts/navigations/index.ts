import { handleMobileNavigation } from './mobile';
import { handleDescopNavigation } from './descop';

export const handleNavigations = () => {
    handleDescopNavigation();
    handleMobileNavigation();
};

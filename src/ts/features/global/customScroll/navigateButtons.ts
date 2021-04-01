import { isSectionId } from '@utils/isSectionId';
import { scrollToSectionByIdentifier } from './index';

const navigationsItems = [
    ...document.querySelectorAll('[data-navigation]'),
] as HTMLElement[];

export const handleNavigateButtons = () => {
    navigationsItems.forEach((item) => {
        const navData = item.dataset.navigation;
        if (navData && isSectionId(navData)) {
            item.addEventListener('click', () =>
                scrollToSectionByIdentifier(navData)
            );
        }
    });
};

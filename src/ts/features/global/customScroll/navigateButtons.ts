import { scrollToSectionByIdentifier } from './index';

const navigationsItems = [
    ...document.querySelectorAll('[data-navigation]'),
] as HTMLElement[];

export const handleNavigateButtons = () => {
    navigationsItems.forEach((item) => {
        const navData = item.dataset.navigation;
        if (navData) {
            item.addEventListener('click', () =>
                scrollToSectionByIdentifier(navData)
            );
        }
    });
};

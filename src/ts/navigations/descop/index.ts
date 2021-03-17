import { applyViewDetectorCallback } from '@utils/viewDetector';

const descopNavItems = [...document.querySelectorAll('.descopMenu__link')];

export const handleDescopNavigation = () => {
    const setActiveItem = (idOfSection: string) => {
        descopNavItems.forEach((item: Element) => {
            const hrefValue = item.getAttribute('href')?.slice(1);

            if (idOfSection === hrefValue) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    applyViewDetectorCallback(setActiveItem);
};

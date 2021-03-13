import { applyDetectorCallback } from '../utils/sectionDetector';

const descopNavItems = [...document.querySelectorAll('.navigation__link')];

export const handleNavigation = () => {
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
    applyDetectorCallback(setActiveItem);
};

import { applyDetectorCallback } from '../utils/sectionDetector';
import { BackgroundTextChange, closeMenu, openMenu } from './actions';

const burger = document.querySelector('.burger') as HTMLButtonElement;
const menu = document.querySelector('.mobileMenu') as HTMLElement;
const menuItems = [
    ...document.querySelectorAll('.mobileMenu__item'),
] as HTMLElement[];
const backgroundText = document.querySelector(
    '.mobileMenu__backgroundText'
) as HTMLElement;

let isMobileMenuOpen = false;

export const handleMobileMenu = () => {
    const onBurgerClick = () => {
        if (isMobileMenuOpen) {
            burger.classList.add('active');
            openMenu(menu, menuItems);
        } else {
            burger.classList.remove('active');
            closeMenu(menu, menuItems);
        }

        isMobileMenuOpen = !isMobileMenuOpen;
    };

    const onSectionDetect = (id: string) => {
        const item = menuItems.find((item) => item.dataset.sectionId === id);
        if (item) {
            menuItems.forEach((item) => item.classList.remove('active'));
            burger.classList.remove('active');
            item.classList.add('active');
            BackgroundTextChange(item, backgroundText);
            closeMenu(menu, menuItems);
        }
    };

    applyDetectorCallback(onSectionDetect);

    burger.addEventListener('click', onBurgerClick);
    menuItems.forEach((item) => {
        item.addEventListener('click', () => closeMenu(menu, menuItems));
    });
};

import { addAllSectionsScrollListener } from '@utils/sectionScrollListener';
import { backgroundTextChange, closeMenu, openMenu } from './actions';

export const burger = document.querySelector('.burger') as HTMLButtonElement;
const menu = document.querySelector('.mobileMenu') as HTMLElement;
const menuItems = [
    ...document.querySelectorAll('.mobileMenu__item'),
] as HTMLElement[];
const backgroundText = document.querySelector(
    '.mobileMenu__backgroundText'
) as HTMLElement;

let isMobileMenuOpen = false;

const onBurgerClick = () => {
    if (!isMobileMenuOpen) {
        burger.classList.add('active');
        openMenu(menu, menuItems);
    } else {
        burger.classList.remove('active');
        closeMenu(menu, menuItems);
    }

    isMobileMenuOpen = !isMobileMenuOpen;
};

export const handleMobileNavigation = () => {
    const onScroll = (from: SectionId, to: SectionId) => {
        const itemToDisable = menuItems.find(
            (item) => item.dataset.navigation === from
        );
        const itemToEnable = menuItems.find(
            (item) => item.dataset.navigation === to
        );

        if (itemToDisable && itemToEnable) {
            itemToDisable.classList.remove('active');
            itemToEnable.classList.add('active');
            burger.classList.remove('active');
            backgroundTextChange(itemToEnable, backgroundText);
            closeMenu(menu, menuItems);
        }
    };

    addAllSectionsScrollListener(onScroll);

    burger.addEventListener('click', onBurgerClick);
    menuItems.forEach((item) => {
        item.addEventListener('click', () => closeMenu(menu, menuItems));
    });
};

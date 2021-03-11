import { closeMenu, openMenu } from './actions';

const burger = document.querySelector('.burger') as HTMLButtonElement;

let isMobileMenuOpen = false;

export const handleMobileMenu = () => {
    const onBurgerClick = () => {
        if (isMobileMenuOpen) {
            burger.classList.add('active');
            openMenu();
        } else {
            burger.classList.remove('active');
            closeMenu();
        }

        isMobileMenuOpen = !isMobileMenuOpen;
    };

    burger.addEventListener('click', onBurgerClick);
};

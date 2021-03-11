import { gsap } from 'gsap';

const menu = document.querySelector('.mobileMenu') as HTMLElement;
const menuItems = document.querySelectorAll('.mobileMenu__item');

export const openMenu = () => {
    const timeline = gsap.timeline();

    timeline.to(menu, {
        opacity: 1,
    });

    menuItems.forEach((item) => {
        timeline.to(item, {
            x: 0,
            opacity: 1,
        });
    });
};

export const closeMenu = () => {
    const timeline = gsap.timeline();

    timeline.to(menu, {
        opacity: 0,
    });

    menuItems.forEach((item) => {
        timeline.set(item, {
            x: 20,
            opacity: 0,
        });
    });
};

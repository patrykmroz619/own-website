import { gsap } from 'gsap';

let timeline: gsap.core.Timeline;

export const openMenu = (menu: HTMLElement, menuItems: Element[]) => {
    menu.style.display = 'block';
    gsap.set(menuItems, { opacity: 0, x: 20 });

    timeline = gsap.timeline();

    timeline.to(menu, {
        opacity: 1,
    });

    menuItems.forEach((item) => {
        timeline.to(
            item,
            {
                x: 0,
                opacity: 1,
            },
            '-=0.1'
        );
    });

    menu.classList.remove('mobileMenu--close');
};

export const closeMenu = (menu: HTMLElement, menuItems: Element[]) => {
    if (timeline) {
        timeline.pause();
    }

    gsap.to([menu, ...menuItems], {
        opacity: 0,
    });

    menu.classList.add('mobileMenu--close');
};

export const backgroundTextChange = (
    item: Element,
    backgroundText: HTMLElement
) => {
    backgroundText.textContent = item.textContent;
};

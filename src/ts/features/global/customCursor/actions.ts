import gsap, { Back } from 'gsap';
import { cursorSize, halfOfCursorSize } from './index';

export const onInteractiveElement = (
    e: MouseEvent,
    cursorElement: HTMLElement,
    cursorShadowElement: HTMLElement
) => {
    if (e.target instanceof HTMLElement) {
        const rect = e.target.getBoundingClientRect();
        const middleX = (rect.left + rect.right) / 2;
        const middleY = (rect.top + rect.bottom) / 2;
        let scale: number;
        const customScale = Number(e.target.dataset.cursorScale);

        if (typeof customScale === 'number' && !isNaN(customScale)) {
            scale = customScale;
        } else {
            scale = rect.width / 40;
        }

        gsap.to(cursorElement, {
            x: (middleX + e.clientX) / 2 - halfOfCursorSize,
            y: (middleY + e.clientY) / 2 - halfOfCursorSize,
            duration: 0.3,
            opacity: 0.2,
            scale,
        });

        gsap.to(cursorShadowElement, {
            opacity: 0.0,
        });
    }
};

export const onNotInteractiveElement = (
    e: MouseEvent,
    cursorElement: HTMLElement,
    cursorShadowElement: HTMLElement
) => {
    gsap.to(cursorElement, {
        x: e.clientX - halfOfCursorSize,
        y: e.clientY - halfOfCursorSize,
        scale: 1,
        duration: 0.2,
        opacity: 1,
    });

    gsap.to(cursorShadowElement, {
        x: e.clientX - halfOfCursorSize,
        y: e.clientY - halfOfCursorSize,
        duration: 1.5,
        opacity: 0.4,
        ease: Back.easeOut,
    });
};

import { gsap, Linear, Back } from 'gsap';
import { mediaQuery } from '@utils/mediaQuery';

const cursorElement = document.querySelector('.cursor') as HTMLDivElement;
const cursorShadowElement = document.querySelector(
    '.cursorShadow'
) as HTMLDivElement;

const cursorSize = cursorElement.offsetWidth;
const halfOfCursorSize = cursorSize / 2;

export const handleCustomCursor = () => {
    const rotateCursor = gsap.timeline({ repeat: -1 });

    rotateCursor.to(cursorElement, {
        rotation: '360',
        duration: 10,
        ease: Linear.easeInOut,
    });

    const onMouseMove = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement) {
            const rect = e.target.getBoundingClientRect();
            const middleX = (rect.left + rect.right) / 2;
            const middleY = (rect.top + rect.bottom) / 2;

            if (e.target.dataset.cursor == 'true') {
                gsap.to(cursorElement, {
                    x: (middleX + e.clientX) / 2 - halfOfCursorSize,
                    y: (middleY + e.clientY) / 2 - halfOfCursorSize,
                    scale:
                        (rect.width <= cursorSize + 10
                            ? rect.width * 1.5
                            : rect.width) / 40,
                    duration: 0.3,
                    opacity: 0.2,
                });

                gsap.to(cursorShadowElement, {
                    opacity: 0.0,
                });

                rotateCursor.play();
            } else {
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

                rotateCursor.pause();
            }
        }
    };

    const onClick = () => {
        gsap.to(cursorShadowElement, {});
    };

    const onQueryMatch = () => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('click', onClick);
    };

    const onQueryNotMatch = () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('click', onClick);
        rotateCursor.pause();
    };

    mediaQuery('(hover: hover)', onQueryMatch, onQueryNotMatch);
};

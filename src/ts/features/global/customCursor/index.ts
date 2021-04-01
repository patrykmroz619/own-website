import { gsap, Linear } from 'gsap';
import { addMediaQueryListener } from '@utils/mediaQueryListener';
import { onInteractiveElement, onNotInteractiveElement } from './actions';

const cursorElement = document.querySelector('.cursor') as HTMLDivElement;
const cursorShadowElement = document.querySelector(
    '.cursorShadow'
) as HTMLDivElement;

export const cursorSize = cursorElement.offsetWidth;
export const halfOfCursorSize = cursorSize / 2;

export const handleCustomCursor = () => {
    const rotateCursor = gsap.timeline({ repeat: -1 });

    rotateCursor.to(cursorElement, {
        rotation: '360',
        duration: 10,
        ease: Linear.easeInOut,
    });

    const onMouseMove = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement) {
            if (e.target.dataset.cursor == 'true') {
                onInteractiveElement(e, cursorElement, cursorShadowElement);
                rotateCursor.play();
            } else {
                onNotInteractiveElement(e, cursorElement, cursorShadowElement);
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

    addMediaQueryListener('(hover: hover)', onQueryMatch, onQueryNotMatch);
};

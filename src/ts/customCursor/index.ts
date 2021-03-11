import { gsap, Linear, Back } from 'gsap';

const cursorElement = document.querySelector('.cursor') as HTMLDivElement;
const cursorShadowElement = document.querySelector(
    '.cursorShadow'
) as HTMLDivElement;

export const handleCustomCursor = () => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(cursorElement, {
        rotation: '360',
        duration: 10,
        ease: Linear.easeInOut,
    });

    const onMouseMove = (e: MouseEvent) => {
        if (e.target instanceof HTMLElement) {
            const rect = e.target.getBoundingClientRect();

            if (e.target.dataset.cursor == 'true') {
                gsap.to(cursorElement, {
                    x: ((rect.left + rect.right) / 2 + e.pageX) / 2 - 25,
                    y: ((rect.top + rect.bottom) / 2 + +e.pageY) / 2 - 25,
                    scale:
                        (rect.width <= 60 ? rect.width * 1.5 : rect.width) / 40,
                    duration: 1.2,
                    opacity: 0.2,
                });

                gsap.to(cursorShadowElement, {
                    opacity: 0.0,
                });

                tl.play();
            } else {
                gsap.to(cursorElement, {
                    x: e.pageX - 25,
                    y: e.pageY - 25,
                    scale: 1,
                    duration: 0.2,
                    opacity: 1,
                });

                gsap.to(cursorShadowElement, {
                    x: e.pageX - 25,
                    y: e.pageY - 25,
                    duration: 1.5,
                    opacity: 0.4,
                    ease: Back.easeOut,
                });

                tl.pause();
            }
        }
    };

    const onClick = () => {
        gsap.to(cursorElement, {});
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);
};

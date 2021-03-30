import { pageWrapper, nextSection, prevSection } from '../index';

export const handleTouch = () => {
    let touchStartPosition = 0;
    const onTouchStart = (e: TouchEvent) => {
        touchStartPosition = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
        const touchEndPosition = e.touches[0].clientY;

        const distance = touchEndPosition - touchStartPosition;

        if (distance < -50) {
            nextSection();
        } else if (distance > 50) {
            prevSection();
        }
    };

    pageWrapper.addEventListener('touchstart', onTouchStart);
    pageWrapper.addEventListener('touchmove', onTouchMove);
};

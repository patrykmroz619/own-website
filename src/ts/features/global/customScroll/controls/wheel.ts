import { pageWrapper, nextSection, prevSection } from '../index';

export const handleWheel = () => {
    const onWheel = (e: WheelEvent) => {
        e.preventDefault();

        // In the firefox delta is equal 3 or -3
        if (e.deltaY > 30 || e.deltaY === 3) {
            nextSection();
        } else if (e.deltaY < -30 || e.deltaY === -3) {
            prevSection();
        }
    };

    pageWrapper.addEventListener('wheel', onWheel);
};

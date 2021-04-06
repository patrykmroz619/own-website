import { pageWrapper, nextSection, prevSection } from '../index';

export const handleWheel = () => {
    const onWheel = (e: WheelEvent) => {
        e.preventDefault();

        if (e.deltaY > 50) {
            nextSection();
        } else if (e.deltaY < -50) {
            prevSection();
        }
    };

    pageWrapper.addEventListener('wheel', onWheel);
};

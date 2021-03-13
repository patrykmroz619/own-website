import { setRandomColor } from './global/randomColor';
import { handleCustomCursor } from './global/customCursor';
import { setHeroTextEffect } from './aboveTheFold/heroTextEffect';

export const runFeatures = () => {
    setRandomColor();
    handleCustomCursor();
    setHeroTextEffect();

    window.addEventListener('DOMContentLoaded', () => {
        import('./aboveTheFold/background').then((background) => {
            background.setBackgroundAnimation();
        });
    });
};

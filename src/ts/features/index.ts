import { handleCustomCursor } from './global/customCursor';
import { setHeroTextEffect } from './aboveTheFold/heroTextEffect';
import { handleColorSchemes } from './global/colorScheme';

export const runFeatures = () => {
    handleCustomCursor();
    setHeroTextEffect();

    handleColorSchemes();

    window.addEventListener('DOMContentLoaded', () => {
        import('./aboveTheFold/background').then((background) => {
            background.setBackgroundAnimation();
        });
    });
};

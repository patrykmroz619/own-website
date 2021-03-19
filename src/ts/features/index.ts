import { handleCustomCursor } from './global/customCursor';
import { setHeroTextEffect } from './aboveTheFold/heroTextEffect';
import { handleColorSchemes } from './global/colorScheme';
import { runAboutSectionEffects } from './about';

export const runFeatures = () => {
    handleCustomCursor();
    setHeroTextEffect();

    handleColorSchemes();
    runAboutSectionEffects();

    window.addEventListener('DOMContentLoaded', () => {
        import('./aboveTheFold/background').then((background) => {
            background.setBackgroundAnimation();
        });
    });
};

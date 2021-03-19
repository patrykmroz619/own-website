import { handleCustomCursor } from './global/customCursor';
import { handleColorSchemes } from './global/colorScheme';
import { runOnHoverTextEffect } from './global/onHoverTextEffect';
import { runAboutSectionEffects } from './about';

export const runFeatures = () => {
    handleCustomCursor();

    handleColorSchemes();
    runOnHoverTextEffect();
    runAboutSectionEffects();

    window.addEventListener('DOMContentLoaded', () => {
        import('./aboveTheFold/background').then((background) => {
            background.setBackgroundAnimation();
        });
    });
};

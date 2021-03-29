import { handleCustomCursor } from './global/customCursor';
import { handleColorSchemes } from './global/colorScheme';
import { runOnHoverTextEffect } from './global/onHoverTextEffect';
import { runAboutSectionEffects } from './about';
import { runPortfolioSlider } from './portfolio';

export const runFeatures = () => {
    handleCustomCursor();

    handleColorSchemes();
    runOnHoverTextEffect();
    runAboutSectionEffects();
    runPortfolioSlider();

    window.addEventListener('DOMContentLoaded', () => {
        import('./aboveTheFold/background').then((background) => {
            background.setBackgroundAnimation();
        });
    });
};

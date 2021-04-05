import { runCustomScroll } from './global/customScroll';
import { handleCustomCursor } from './global/customCursor';
import { handleColorSchemes } from './global/colorScheme';
import { runAboveTheFoldEffects } from './aboveTheFold';
import { runOnHoverTextEffect } from './global/onHoverTextEffect';
import { runAboutSectionEffects } from './about';
import { runPortfolioEffects } from './portfolio';
import { runTechnologiesEffects } from './technologies';

export const runFeatures = () => {
    handleCustomCursor();
    handleColorSchemes();
    runAboveTheFoldEffects();

    runOnHoverTextEffect();
    runAboutSectionEffects();
    runPortfolioEffects();
    runTechnologiesEffects();

    runCustomScroll();
};

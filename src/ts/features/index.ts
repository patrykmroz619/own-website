import { runCustomScroll } from './global/customScroll';
import { handleCustomCursor } from './global/customCursor';
import { handleColorSchemes } from './global/colorScheme';
import { runOnHoverTextEffect } from './global/onHoverTextEffect';
import { handleKeyboardNavigation } from './global/keyboardNavigation';
import { handleLazyFeatures } from '../lazy';

export const runFeatures = () => {
    handleCustomCursor();
    handleColorSchemes();
    handleKeyboardNavigation();
    runOnHoverTextEffect();

    window.addEventListener('load', () => {
        handleLazyFeatures();
    });

    runCustomScroll();
};

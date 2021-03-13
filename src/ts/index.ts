import { handleCustomCursor } from './customCursor';
import { handleMobileMenu } from './mobileMenu';
import { handleNavigation } from './navigation.ts';
import { setRandomColor } from './randomColor';
import { heroTextEffect } from './heroTextEffect';

setRandomColor();
handleCustomCursor();
handleNavigation();
handleMobileMenu();
heroTextEffect();

window.addEventListener('DOMContentLoaded', () => {
    import('./background').then((background) => {
        background.start();
    });
});

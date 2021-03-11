import { handleCustomCursor } from './customCursor';
import { handleMobileMenu } from './mobileMenu';
import { setRandomColor } from './randomColor';

setRandomColor();
handleCustomCursor();
handleMobileMenu();

window.addEventListener('DOMContentLoaded', () => {
    import('./background').then((background) => {
        background.start();
    });
});

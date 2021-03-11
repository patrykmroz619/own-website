import { handleCustomCursor } from './customCursor';
import { setRandomColor } from './randomColor';

setRandomColor();
handleCustomCursor();

window.addEventListener('DOMContentLoaded', () => {
    import('./background').then((background) => {
        background.start();
    });
});

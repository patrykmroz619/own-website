import { setRandomColor } from './randomColor';

setRandomColor();

window.addEventListener('DOMContentLoaded', () => {
    import('./background').then((background) => {
        background.start();
    });
});

import { runScrollAnimation } from './scrollAnimation';

export const runAboveTheFoldEffects = () => {
    runScrollAnimation();

    window.addEventListener('DOMContentLoaded', () => {
        import('./background').then((background) => {
            background.setBackgroundAnimation();
        });
    });
};

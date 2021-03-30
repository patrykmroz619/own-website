import { nextSection, prevSection } from '../index';

export const handleKeyboard = () => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
        }

        if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
            nextSection();
        } else if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
            prevSection();
        }
    };

    window.addEventListener('keydown', onKeyDown);
};

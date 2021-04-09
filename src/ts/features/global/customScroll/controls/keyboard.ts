import { nextSection, prevSection } from '../index';

export const handleKeyboard = () => {
    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            e.key === 'ArrowUp' ? prevSection() : nextSection();
        }
    };

    window.addEventListener('keydown', onKeyDown);
};

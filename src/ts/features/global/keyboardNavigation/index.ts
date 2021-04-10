const pageWrapper = document.querySelector('.wrapper') as HTMLElement;

const onTabPress = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
        pageWrapper.classList.add('tabbing');

        window.removeEventListener('keydown', onTabPress);
        window.addEventListener('mousedown', onMouseDown);
    }
};

const onMouseDown = () => {
    pageWrapper.classList.remove('tabbing');

    window.removeEventListener('mousedown', onMouseDown);
    window.addEventListener('keydown', onTabPress);
};

export const handleKeyboardNavigation = () => {
    window.addEventListener('keydown', onTabPress);
};

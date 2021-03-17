import { applyColorScheme } from './schemes';

const COLOR_MODE = 'COLOR_MODE';
const DARK_MODE = 'DARK';
const LIGHT_MODE = 'LIGHT';

const lightModeButton = document.querySelector(
    '.colorModeToggler__item--lightMode'
) as HTMLButtonElement;
const darkModeButton = document.querySelector(
    '.colorModeToggler__item--darkMode'
) as HTMLButtonElement;

const setDarkMode = () => {
    localStorage.setItem(COLOR_MODE, DARK_MODE);
    lightModeButton.classList.remove('active');
    darkModeButton.classList.add('active');
    applyColorScheme('dark');
};

const setLightMode = () => {
    localStorage.setItem(COLOR_MODE, LIGHT_MODE);
    lightModeButton.classList.add('active');
    darkModeButton.classList.remove('active');
    applyColorScheme('light');
};

export const handleColorSchemes = () => {
    lightModeButton.addEventListener('click', setLightMode);
    darkModeButton.addEventListener('click', setDarkMode);

    const colorMode = localStorage.getItem(COLOR_MODE);

    if (colorMode === LIGHT_MODE) {
        setLightMode();
    } else {
        setDarkMode();
    }
};

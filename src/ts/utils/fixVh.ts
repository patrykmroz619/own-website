import { setCssVariable } from './cssVariables';

export const fixVh = () => {
    const onResize = () => {
        setCssVariable('--vh', `${window.innerHeight}px`);
    };

    window.addEventListener('resize', onResize);

    onResize();
};

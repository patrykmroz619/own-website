import { setCssVariable } from './cssVariables';

const resizeFixVhEvent = new Event('resizefixvh');

export const fixVh = () => {
    const onResize = () => {
        setCssVariable('--windowHeight', `${window.innerHeight}px`);
        window.dispatchEvent(resizeFixVhEvent);
    };

    window.addEventListener('resize', onResize);

    onResize();
};

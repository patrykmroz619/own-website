import { CSS3DRenderer } from 'three/examples/jsm/renderers/CSS3DRenderer';

export const getRenderer = (targetElement: HTMLElement): CSS3DRenderer => {
    const renderer = new CSS3DRenderer();

    const onResize = () => {
        renderer.setSize(targetElement.offsetWidth, targetElement.offsetHeight);
    };
    window.addEventListener('resizefixvh', onResize);

    onResize();

    targetElement.appendChild(renderer.domElement);
    return renderer;
};

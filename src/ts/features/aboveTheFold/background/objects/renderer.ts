import { WebGLRenderer } from 'three';

export const getRenderer = (targetElement: HTMLElement): WebGLRenderer => {
    const renderer = new WebGLRenderer({ antialias: true, alpha: true });

    const onResize = () => {
        renderer.setSize(targetElement.offsetWidth, targetElement.offsetHeight);
    };
    window.addEventListener('resizefixvh', onResize);

    onResize();

    targetElement.appendChild(renderer.domElement);
    return renderer;
};

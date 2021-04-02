import { PerspectiveCamera } from 'three';

export const getCamera = (targetElement: HTMLElement): PerspectiveCamera => {
    const camera = new PerspectiveCamera(
        75,
        targetElement.offsetWidth / targetElement.offsetHeight,
        0.1,
        1000
    );
    camera.position.z = 910;

    const onResize = () => {
        camera.aspect = targetElement.offsetWidth / targetElement.offsetHeight;
        camera.updateProjectionMatrix();
    };
    window.addEventListener('resizefixvh', onResize);

    onResize();

    return camera;
};

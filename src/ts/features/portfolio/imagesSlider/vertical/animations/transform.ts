import gsap from 'gsap';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';

export const transformToPosition = (image: CSS3DObject, position: number) => {
    gsap.to(image.rotation, {
        y: Math.abs(position) * 0.25,
    });

    gsap.to(image.scale, {
        x: position == 0 ? 1.2 : 1,
        y: position == 0 ? 1.2 : 1,
    });

    gsap.to(image.position, {
        z: Math.abs(position) * -160,
        x: Math.abs(position) * -130,
    });
};

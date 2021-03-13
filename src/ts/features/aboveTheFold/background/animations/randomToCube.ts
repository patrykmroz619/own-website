import { Mesh } from 'three';
import { gsap } from 'gsap';

export const randomToCubeAnimation = (
    cubes: Mesh[],
    positions: Position3d[]
) => {
    cubes.forEach((cube, index) => {
        const duration = Math.random() + 1;
        const delay = Math.random() * 18;

        gsap.to(cube.position, {
            x: positions[index].x,
            y: positions[index].y,
            z: positions[index].z,
            duration,
            delay,
        });
    });
};

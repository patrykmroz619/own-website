import { Mesh } from 'three';
import { gsap, Power2 } from 'gsap';

export const sphereToRandomAnimation = (
    cubes: Mesh[],
    positions: Position3d[]
) => {
    cubes.forEach((cube, index) => {
        const timeline = gsap.timeline();

        timeline.to(cube.position, {
            x: cube.position.x < 0 ? cube.position.x + 4 : cube.position.x - 4,
            y: cube.position.y < 0 ? cube.position.y + 4 : cube.position.y - 4,
            z: cube.position.z < 0 ? cube.position.z + 4 : cube.position.z - 4,
            duration: 1,
            ease: Power2.easeInOut,
        });

        const duration = Math.random() + 1;

        timeline.to(cube.position, {
            x: positions[index].x,
            y: positions[index].y,
            z: positions[index].z,
            duration,
            delay: 0.1,
            ease: Power2.easeOut,
        });
    });
};

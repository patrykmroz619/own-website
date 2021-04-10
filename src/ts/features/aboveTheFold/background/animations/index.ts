import { Mesh } from 'three';
import { generatePositions } from '../positions';
import { PausableTimeout } from '@utils/PausableTimeout';
import { defaultAnimation } from './default';
import { sphereToRandomAnimation } from './sphereToRandomAnimation';
import { randomToCubeAnimation } from './randomToCube';

type ShapesAnimationType = (cubes: Mesh[]) => [() => void, () => void];

export const shapesAnimation: ShapesAnimationType = (cubes) => {
    const cubesAmount = cubes.length;

    const positions = generatePositions(cubesAmount);
    const animations: BackgroundShapesNames[] = [
        'cube',
        'multiSpheres',
        'helix',
        'sphere',
        'random',
    ]; // Determined animation queue

    let iterationOfAnimation = 0;
    const animate = () => {
        const currentAnimationName =
            animations[iterationOfAnimation % animations.length];

        if (document.visibilityState === 'visible') {
            iterationOfAnimation++;

            switch (currentAnimationName) {
                case 'cube':
                    randomToCubeAnimation(
                        cubes,
                        positions[currentAnimationName]
                    );
                    break;
                case 'random':
                    sphereToRandomAnimation(
                        cubes,
                        positions[currentAnimationName]
                    );
                    break;
                default:
                    defaultAnimation(cubes, positions[currentAnimationName]);
            }
        }

        pausableTimeout.start(currentAnimationName == 'cube' ? 23000 : 8000);
    };

    const pausableTimeout = new PausableTimeout(animate, 1000);
    pausableTimeout.start();

    const pause = () => pausableTimeout.pause();
    const resume = () => pausableTimeout.resume();

    return [pause, resume];
};

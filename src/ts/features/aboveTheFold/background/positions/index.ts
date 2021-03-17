import { getCubePositions } from './cube';
import { getHelixPositions } from './helix';
import { getMultiSpherePositions } from './multiSphere';
import { getRandomPositions } from './random';
import { getSpherePositions } from './sphere';

export const generatePositions = (
    objectAmount: number
): BackgroundShapePositions => ({
    cube: getCubePositions(objectAmount, 2.2),
    multiSpheres: getMultiSpherePositions(objectAmount, 50, 12),
    helix: getHelixPositions(objectAmount, 24),
    sphere: getSpherePositions(objectAmount, 25),
    random: getRandomPositions(objectAmount, 70),
});

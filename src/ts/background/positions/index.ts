import { getCubePositions } from './cube';
import { getHelixPositions } from './helix';
import { getMultiSpherePositions } from './multiSphere';
import { getRandomPositions } from './random';
import { getSpherePositions } from './sphere';

export const generatePositions = (
    objectAmount: number
): BackgroundShapePositions => ({
    cube: getCubePositions(objectAmount, 2),
    multiSpheres: getMultiSpherePositions(objectAmount, 50, 10),
    helix: getHelixPositions(objectAmount, 25),
    sphere: getSpherePositions(objectAmount, 30),
    random: getRandomPositions(objectAmount, 50),
});

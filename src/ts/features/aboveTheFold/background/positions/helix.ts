import { Object3D } from 'three';

export const getHelixPositions = (objectAmount: number, radius: number) => {
    const helixPositions = [];

    for (let i = 0; i < objectAmount; i += 2) {
        const alpha = Math.acos(-1 + (2 * i) / objectAmount);
        const beta = (Math.sqrt(objectAmount * Math.PI) * alpha) / 3;

        const y = (i - objectAmount + objectAmount / 2) / 1.2;

        const v = new Object3D();

        v.position.setFromCylindricalCoords(radius, beta, y);

        helixPositions.push({
            x: v.position.x,
            z: v.position.z,
            y: v.position.y,
        });

        helixPositions.push({
            x: v.position.x,
            z: v.position.z,
            y: v.position.y + 7,
        });
    }

    return helixPositions;
};

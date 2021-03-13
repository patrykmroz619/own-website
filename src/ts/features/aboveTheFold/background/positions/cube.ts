export const getCubePositions = (objectAmount: number, space: number) => {
    const cubePositions = [];
    const thirdRootOfObjectAmount = Math.round(Math.pow(objectAmount, 1 / 3));
    const twoThirdsRootOfObjectAmount = Math.round(
        Math.pow(objectAmount, 2 / 3)
    );

    const initialPosition =
        thirdRootOfObjectAmount / 2 - thirdRootOfObjectAmount;

    let x = initialPosition;
    let y = initialPosition;
    let z = initialPosition;

    for (let i = 0; i < objectAmount; i++) {
        if (i % thirdRootOfObjectAmount == 0 && i != 0) {
            x = initialPosition;
            y++;
        }

        if (i % twoThirdsRootOfObjectAmount == 0 && i != 0) {
            x = initialPosition;
            y = initialPosition;
            z++;
        }

        x++;
        cubePositions.push({
            x: x * space * 3,
            y: y * space * 3,
            z: z * space * 3,
        });
    }

    return cubePositions;
};

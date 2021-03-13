export const getMultiSpherePositions = (
    objectAmount: number,
    radius: number,
    sphereRadius: number
) => {
    const multiSpherePositions: Position3d[] = [];
    const thirdRootOfObjectAmount = Math.round(Math.pow(objectAmount, 1 / 3));
    const twoThirdsRootOfObjectAmount = Math.round(
        Math.pow(objectAmount, 2 / 3)
    );

    for (let i = 0; i < thirdRootOfObjectAmount; i++) {
        const x = Math.random() * radius * 2 - radius;
        const y = Math.random() * radius * 2 - radius;
        const z = Math.random() * radius * 2 - radius;

        for (let i = 0; i < twoThirdsRootOfObjectAmount; i++) {
            const alpha = Math.acos(-1 + (2 * i) / 36);
            const beta = Math.sqrt(36 * Math.PI) * alpha;

            multiSpherePositions.push({
                x: x + sphereRadius * Math.cos(beta) * Math.sin(alpha),
                z: y + sphereRadius * Math.sin(beta) * Math.sin(alpha),
                y: z + sphereRadius * Math.cos(alpha),
            });
        }
    }

    return multiSpherePositions;
};

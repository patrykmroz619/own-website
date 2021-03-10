export const getSpherePositions = (cubesAmount: number, radius: number) => {
    const spherePositions: Position3d[] = [];

    for (let i = 0; i < cubesAmount; i++) {
        const alpha = Math.acos(-1 + (2 * i) / cubesAmount);
        const beta = Math.sqrt(cubesAmount * Math.PI) * alpha;

        spherePositions.push({
            x: radius * Math.cos(beta) * Math.sin(alpha),
            z: radius * Math.sin(beta) * Math.sin(alpha),
            y: radius * Math.cos(alpha),
        });
    }

    return spherePositions;
};

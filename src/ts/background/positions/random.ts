export const getRandomPositions = (objectAmount: number, radius: number) => {
    const randomPositions = [];

    for (let i = 0; i < objectAmount; i++) {
        const x = Math.random() * radius * 2 - radius;
        const y = Math.random() * radius * 2 - radius;
        const z = Math.random() * radius * 2 - radius;

        randomPositions.push({ x, y, z });
    }

    return randomPositions;
};

export const calculateSpeedForNextFrame = (
    gapBetweenImages: number,
    idOfCurrentElement: number,
    currentSpeed: number,
    currentPosition: number
) => {
    let newSpeed = currentSpeed / 15;

    const targetPosition = idOfCurrentElement * gapBetweenImages;
    const distance = targetPosition - currentPosition;

    newSpeed += distance / 30;

    return newSpeed;
};

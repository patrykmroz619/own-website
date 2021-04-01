import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { transformToPosition } from '../animations/transform';
import { images } from '../images';

const createImageObject = (
    image: HTMLImageElement,
    positionId: number
): CSS3DObject => {
    const imageObject = new CSS3DObject(image);

    transformToPosition(imageObject, positionId);

    return imageObject;
};

export const getImagesObjects = (
    initialActiveElement: number,
    gapBetweenImages: number
) => {
    const imagesObjects: CSS3DObject[] = images.map((image, index) => {
        const positionId = index - initialActiveElement;
        const clonedImage = image.cloneNode() as HTMLImageElement;
        const imageObject = createImageObject(clonedImage, positionId);

        imageObject.position.y = gapBetweenImages * index * -1;

        return imageObject;
    });

    return imagesObjects;
};

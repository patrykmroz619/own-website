import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { gsap } from 'gsap';

const getPosition = (object: CSS3DObject) => ({
    x: object.position.x,
    y: object.position.y,
    z: object.position.z,
});

export const replacePosition = (object1: CSS3DObject, object2: CSS3DObject) => {
    const position1 = getPosition(object1);
    const position2 = getPosition(object2);

    const timeline = gsap.timeline();

    timeline.to(object1.position, {
        x: 80,
        y: 0,
        z: 500,
        duration: 1.5,
    });
    timeline.to(
        object2.position,
        {
            x: -80,
            y: 0,
            z: 500,
            duration: 1.5,
        },
        '-=1.5'
    );

    timeline.to(object1.position, { ...position2, duration: 1.5, delay: 2 });
    timeline.to(object2.position, { ...position1, duration: 1.5 }, '-=1.5');
};

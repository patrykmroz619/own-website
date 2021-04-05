import { gsap } from 'gsap';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { boardXElements, boardYElements } from './boardScheme';

const OFFSETX = 160;
const OFFSETY = 210;
const halfOfBoardWidth = ((boardXElements - 1) * OFFSETX) / 2;
const halfOfBoardHeight = ((boardYElements - 1) * OFFSETY) / 2;

export const setPosition = (object: CSS3DObject, x: number, y: number) => {
    gsap.to(object.position, {
        x: x * OFFSETX - halfOfBoardWidth,
        y: y * OFFSETY - halfOfBoardHeight,
    });
};

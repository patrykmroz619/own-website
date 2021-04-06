import { Scene, Vector2 } from 'three';
import { CSS3DObject } from 'three/examples/jsm/renderers/CSS3DRenderer';
import { boardScheme } from './boardScheme';
import { runMoveEffectOnScene } from './move';
import { generateBoard } from './objects/board';
import { getCamera } from './objects/camera';
import { getRenderer } from './objects/cssRenderer';
import { replacePosition } from './replacePosition';

const root = document.querySelector('.technologies__board') as HTMLElement;

const renderer = getRenderer(root);
const camera = getCamera(root);
const scene = new Scene();
const board = generateBoard(boardScheme);
const objects = board.flat().filter((x) => Boolean(x)) as CSS3DObject[];
const mouse = new Vector2();

scene.add(...objects);

runMoveEffectOnScene(scene);

let isBoardAnimation = false;

const randomReplace = () => {
    if (isBoardAnimation && document.visibilityState === 'visible') {
        const randomIndex1 = Math.floor(Math.random() * objects.length);
        const randomIndex2 = Math.floor(Math.random() * objects.length);

        replacePosition(objects[randomIndex1], objects[randomIndex2]);
    }
    setTimeout(randomReplace, 5000);
};

const onMove = (x: number, y: number) => {
    mouse.x = x / window.innerWidth;
    mouse.y = y / window.innerHeight;
};

window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));

const boardAnimation = () => {
    if (isBoardAnimation) {
        renderer.render(scene, camera);
        requestAnimationFrame(boardAnimation);
    }
};

setTimeout(randomReplace, 5000);

export const runTechnologiesBoard = () => {
    isBoardAnimation = true;
    boardAnimation();
};

export const stopTechnologiesBoard = () => {
    isBoardAnimation = false;
};

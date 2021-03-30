import { Scene } from 'three';
import { getCamera } from './objects/camera';
import { getImagesObjects } from './objects/imageObjects';
import { getRenderer } from './objects/cssRenderer';
import { calculateSpeedForNextFrame } from './animations/calculateSpeed';
import { transformToPosition } from './animations/transform';
import { setActiveProject } from '../../contentSlider';
import { OnSlideEvent, slideEventListener } from '@utils/slideEventListener';

const root = document.querySelector(
    '.portfolio__projectsImages--descop'
) as HTMLDivElement;

const GAP_BETWEEN_IMAGES = 250;
const INITIAL_ACTIVE_ELEMENT = 2;

const renderer = getRenderer(root);
const camera = getCamera(root);
const scene = new Scene();
const images = getImagesObjects(INITIAL_ACTIVE_ELEMENT, GAP_BETWEEN_IMAGES);

scene.add(...images);

const idOfLastElement = images.length - 1;
let speed = 0;
let currentPosition = 0;
let idOfCurrentElement = INITIAL_ACTIVE_ELEMENT;
let isImageAnimationWorking = false;

const imageAnimation = () => {
    isImageAnimationWorking = true;

    setTimeout(() => (isImageAnimationWorking = false), 500);

    images.forEach((image, index) => {
        const position = index - idOfCurrentElement;
        transformToPosition(image, position);
    });
};

let isSliderActive = false;

const slideAnimation = () => {
    if (isSliderActive) {
        const newSpeed = calculateSpeedForNextFrame(
            GAP_BETWEEN_IMAGES,
            idOfCurrentElement,
            speed,
            currentPosition
        );

        speed = newSpeed;
        currentPosition += newSpeed;

        scene.position.y = currentPosition;
        renderer.render(scene, camera);

        requestAnimationFrame(slideAnimation);
    }
};

export const setActiveElement = (idOfActiveElement: number) => {
    idOfCurrentElement = idOfActiveElement;
    setActiveProject(idOfActiveElement);
    imageAnimation();
};

const nextElement = () => {
    setActiveElement(++idOfCurrentElement);
};
const prevElement = () => {
    setActiveElement(--idOfCurrentElement);
};

const onSpeedUpdate = (newSpeed: number) => {
    if (!isImageAnimationWorking) {
        if (newSpeed > 60 && idOfCurrentElement < idOfLastElement) {
            nextElement();
        } else if (newSpeed < -60 && idOfCurrentElement > 0) {
            prevElement();
        }
    }
};

const onRootScroll = (e: WheelEvent) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    speed += e.deltaY;
    onSpeedUpdate(speed);
};

let prevSlideY = 0;

const onSlideStart: OnSlideEvent = (x, y) => {
    prevSlideY = y;
};

const onSlide: OnSlideEvent = (x, y) => {
    const delta = prevSlideY - y;
    speed += delta / 5;
    onSpeedUpdate(speed);
};

let unsubscribeSlideListener: () => void = () => null;

export const runVerticalSlider = () => {
    isSliderActive = true;
    slideAnimation();
    idOfCurrentElement = INITIAL_ACTIVE_ELEMENT;
    setActiveProject(idOfCurrentElement);
    unsubscribeSlideListener = slideEventListener(
        root,
        onSlideStart,
        onSlide,
        null,
        true
    );
    root.addEventListener('wheel', onRootScroll);
};

export const turnVerticalSliderOff = () => {
    isSliderActive = false;
    unsubscribeSlideListener();
    root.removeEventListener('wheel', onRootScroll);
};

import { slideEventListener, OnSlideEvent } from '@utils/slideEventListener';
import { setActiveProject } from '../../content';

const imagesBox = document.querySelector(
    '.portfolio__projectsImages--mobile'
) as HTMLElement;

const numberOfProjects = imagesBox.children.length;

let position = 0;
let isSliderActive = false;
let idOfActiveElement = 0;
let currentElementPosition = 0;

export const setActiveElement = (idOfActiveElement: number) => {
    setActiveProject(idOfActiveElement);

    currentElementPosition = idOfActiveElement * imagesBox.offsetWidth;
};

const indexOfLastProject = numberOfProjects - 1;
const changeToNextElement = () => {
    idOfActiveElement += idOfActiveElement === indexOfLastProject ? 0 : 1;
    setActiveElement(idOfActiveElement);
};

const changeToPreviousElement = () => {
    idOfActiveElement += idOfActiveElement === 0 ? 0 : -1;
    setActiveElement(idOfActiveElement);
};

let startSlideX = 0;
let prevSlideX = 0;
let slideActive = true;

const onSlideStart: OnSlideEvent = (x) => {
    prevSlideX = x;
    startSlideX = x;
};

const onSlide: OnSlideEvent = (x) => {
    const delta = prevSlideX - x;
    const touchDistance = startSlideX - x;
    prevSlideX = x;
    position += delta;

    if (slideActive) {
        if (touchDistance > 100) {
            changeToNextElement();
            slideActive = false;
        } else if (touchDistance < -100) {
            slideActive = false;
            changeToPreviousElement();
        }
    }
};

const onSlideEnd = () => {
    slideActive = true;
};

const slideAnimation = () => {
    if (isSliderActive) {
        const distance = currentElementPosition - position;

        position += distance / 25;

        imagesBox.style.transform = `translateX(${-position}px)`;
        requestAnimationFrame(slideAnimation);
    }
};

let unsubscribeSlideListener: () => void = () => null;

export const runHorizontalSlider = () => {
    isSliderActive = true;
    setActiveElement(idOfActiveElement);
    slideAnimation();
    unsubscribeSlideListener = slideEventListener(
        imagesBox,
        onSlideStart,
        onSlide,
        onSlideEnd
    );
};

export const turnHorizontalSliderOff = () => {
    isSliderActive = false;
    unsubscribeSlideListener();
};

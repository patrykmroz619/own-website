import { slideEventListener, OnSlideEvent } from '@utils/slideEventListener';
import { setActiveProject } from '../../content';

const imagesBox = document.querySelector(
    '.portfolio__projectsImages--mobile'
) as HTMLElement;

const numberOfProjects = imagesBox.children.length;

let prevSlideX = 0;
let position = 0;
let isSliderActive = false;
let idOfActiveElement = 0;
let currentElementPosition = 0;
let nextElementPosition = 0;
let previousElementPosition = 0;

const onSlideStart: OnSlideEvent = (x) => {
    prevSlideX = x;
};

export const setActiveElement = (idOfActiveElement: number) => {
    setActiveProject(idOfActiveElement);

    currentElementPosition = idOfActiveElement * window.innerWidth;
    nextElementPosition = (idOfActiveElement + 1) * window.innerWidth;
    previousElementPosition = (idOfActiveElement - 1) * window.innerWidth;
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

const onSlide: OnSlideEvent = (x) => {
    const delta = prevSlideX - x;
    position += delta;

    const distanceToCurrentElementPosition = Math.abs(
        currentElementPosition - position
    );
    const distanceToNextElementPosition = Math.abs(
        nextElementPosition - position
    );
    const distanceToPrevElementPosition = Math.abs(
        previousElementPosition - position
    );

    if (distanceToCurrentElementPosition > distanceToNextElementPosition - 80) {
        changeToNextElement();
    } else if (
        distanceToCurrentElementPosition >
        distanceToPrevElementPosition - 80
    ) {
        changeToPreviousElement();
    }

    prevSlideX = x;
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
        onSlide
    );
};

export const turnHorizontalSliderOff = () => {
    isSliderActive = false;
    unsubscribeSlideListener();
};

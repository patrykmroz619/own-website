import { addMediaQueryListener } from '@utils/mediaQueryListener';
import {
    runVerticalSlider,
    turnVerticalSliderOff,
    setActiveElement as setActiveElementForVerticalSlider,
} from './images/vertical';
import {
    runHorizontalSlider,
    turnHorizontalSliderOff,
    setActiveElement as setActiveElementForHorizontalSlider,
} from './images/horizontal';

export const setActiveProject = (idOfActiveProject: number) => {
    const verticalSlider = matchMedia('(min-aspect-ratio: 6/8)').matches;
    if (verticalSlider) {
        setActiveElementForVerticalSlider(idOfActiveProject);
    } else {
        setActiveElementForHorizontalSlider(idOfActiveProject);
    }
};

let unsubscribleListener = () => {
    return;
};

export const runPortfolioSlider = () => {
    const onMatch = () => {
        turnHorizontalSliderOff();
        runVerticalSlider();
    };

    const onNotMatch = () => {
        turnVerticalSliderOff();
        runHorizontalSlider();
    };

    unsubscribleListener = addMediaQueryListener(
        '(min-aspect-ratio: 6/8)',
        onMatch,
        onNotMatch
    );
};

export const disablePortfolioSlider = () => {
    turnHorizontalSliderOff();
    turnVerticalSliderOff();
    unsubscribleListener();
};

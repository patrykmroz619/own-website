import { mediaQuery } from '@utils/mediaQuery';
import {
    runVerticalSlider,
    turnVerticalSliderOff,
    setActiveElement as setActiveElementForVerticalSlider,
} from './imagesSlider/vertical';
import {
    runMobileSlider,
    turnMobileSliderOff,
    setActiveElement as setActiveElementForHorizontalSlider,
} from './imagesSlider/horizontal';

export const setActiveProject = (idOfActiveProject: number) => {
    const verticalSlider = matchMedia('(min-aspect-ratio: 6/8)').matches;
    if (verticalSlider) {
        setActiveElementForVerticalSlider(idOfActiveProject);
    } else {
        setActiveElementForHorizontalSlider(idOfActiveProject);
    }
};

export const runPortfolioSlider = () => {
    const onMatch = () => {
        turnMobileSliderOff();
        runVerticalSlider();
    };

    const onNotMatch = () => {
        turnVerticalSliderOff();
        runMobileSlider();
    };

    mediaQuery('(min-aspect-ratio: 6/8)', onMatch, onNotMatch);
};

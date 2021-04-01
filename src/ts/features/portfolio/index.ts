import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { fadeInElements, fadeOutElements } from './scrollAnimation';
import { disablePortfolioSlider, runPortfolioSlider } from './slider';

export const runPortfolioEffects = () => {
    addSectionScrollListener('portfolio', (isSectionVisible) => {
        if (isSectionVisible) {
            runPortfolioSlider();
            fadeInElements();
        } else {
            disablePortfolioSlider();
            fadeOutElements();
        }
    });
};

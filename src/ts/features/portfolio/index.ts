import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { disablePortfolioSlider, runPortfolioSlider } from './slider';

export const runPortfolioEffects = () => {
    addSectionScrollListener('portfolio', (isSectionVisible) => {
        if (isSectionVisible) {
            runPortfolioSlider();
        } else {
            disablePortfolioSlider();
        }
    });
};

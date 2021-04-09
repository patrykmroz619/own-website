import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { fadeIn, fadeOut } from './scrollAnimation';

export const runContactFeatures = () => {
    addSectionScrollListener('contact', (isSectionVisible) => {
        if (isSectionVisible) {
            fadeIn();
        } else {
            fadeOut();
        }
    });
};

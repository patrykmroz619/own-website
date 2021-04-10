import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { handleContactForm } from './form';
import { fadeIn, fadeOut } from './scrollAnimation';

export const runContactFeatures = () => {
    addSectionScrollListener('contact', (isSectionVisible) => {
        if (isSectionVisible) {
            fadeIn();
        } else {
            fadeOut();
        }
    });

    handleContactForm();
};

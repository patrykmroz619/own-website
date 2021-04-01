import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { fadeInContent, fadeOutContent } from './scrollAnimation';
import { pauseTyping, runTyping } from './typingEffect';

export const runAboutSectionEffects = () => {
    addSectionScrollListener('about', (isSectionVisible) => {
        if (isSectionVisible) {
            runTyping();
            fadeInContent();
        } else {
            fadeOutContent();
            pauseTyping();
        }
    });
};

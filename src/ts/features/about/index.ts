import { applyScrollAnimations } from './scrollAnimation';
import { runTyping } from './typingEffect';

export const runAboutSectionEffects = () => {
    runTyping();
    applyScrollAnimations();
};

import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { runTechnologiesBoard, stopTechnologiesBoard } from './board';
import { fadeIn, fadeOut } from './scrollAnimation';

export const runTechnologiesEffects = () => {
    addSectionScrollListener('technologies', (isSectionVisible) => {
        if (isSectionVisible) {
            runTechnologiesBoard();
            fadeIn();
        } else {
            stopTechnologiesBoard();
            fadeOut();
        }
    });

    runTechnologiesBoard();
};

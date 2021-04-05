import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { runTechnologiesBoard, stopTechnologiesBoard } from './board';

export const runTechnologiesEffects = () => {
    addSectionScrollListener('technologies', (isSectionVisible) => {
        if (isSectionVisible) {
            runTechnologiesBoard();
        } else {
            stopTechnologiesBoard();
        }
    });
};

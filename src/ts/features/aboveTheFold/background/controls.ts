import { addSectionScrollListener } from '@utils/sectionScrollListener';

type Callback = () => void;

export const controlAnimation = (resume: Callback, pause: Callback) => {
    const onSectionScroll = (isSectionVisible: boolean) => {
        if (isSectionVisible) {
            resume();
        } else {
            pause();
        }
    };

    addSectionScrollListener('start', onSectionScroll);
};

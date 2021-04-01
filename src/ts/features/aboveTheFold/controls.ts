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

    const onVisibilityChange = () => {
        if (document.hidden) {
            pause();
        } else {
            resume();
        }
    };

    addSectionScrollListener('start', onSectionScroll);
    document.addEventListener('visibilitychange', onVisibilityChange);
};

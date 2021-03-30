import { handleControls } from './controls';
import { handleNavigateButtons } from './navigateButtons';
import { scrollAnimation } from './scrollAnimation';

export const pageWrapper = document.querySelector('.wrapper') as HTMLElement;
const sections = [...document.querySelectorAll('.section')] as HTMLElement[];

let currentSectionIdx = 0;
let isScrolling = false;

const onScrollComplete = () => (isScrolling = false);

export const scrollToSectionByIdx = (sectionIdx: number) => {
    const isScrollingEnable =
        sectionIdx >= 0 && sectionIdx < sections.length && !isScrolling;

    if (isScrollingEnable) {
        currentSectionIdx = sectionIdx;
        const currentSection = sections[currentSectionIdx];

        isScrolling = true;
        scrollAnimation(currentSection, onScrollComplete);
    }
};

export const scrollToSectionByIdentifier = (sectionIdentifier: string) => {
    const sectionIdx = sections.findIndex(
        (section) => section.getAttribute('id') === sectionIdentifier
    );

    if (sectionIdx != -1) {
        scrollToSectionByIdx(sectionIdx);
    }
};

export const prevSection = () => scrollToSectionByIdx(currentSectionIdx - 1);
export const nextSection = () => scrollToSectionByIdx(currentSectionIdx + 1);

export const runCustomScroll = () => {
    handleControls();
    handleNavigateButtons();
};

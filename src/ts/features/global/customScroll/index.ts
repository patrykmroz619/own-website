import { isSectionId } from '@utils/isSectionId';
import { dispatchScrollChange } from '@utils/sectionScrollListener';
import { handleControls } from './controls';
import { handleNavigateButtons } from './navigateButtons';
import { scrollAnimation } from './scrollAnimation';
import { hasPageBeenRefreshed } from '@utils/hasPageBeenRefreshed.ts';

export const pageWrapper = document.querySelector('.wrapper') as HTMLElement;
const sections = [...document.querySelectorAll('.section')] as HTMLElement[];

let currentSectionIdx = 0;
let isScrolling = false;

const onScrollComplete = () => (isScrolling = false);

const getSectionId = (idx: number) => sections[idx].id;

export const scrollToSectionByIdx = (sectionIdx: number) => {
    const isScrollingEnable =
        sectionIdx >= 0 && sectionIdx < sections.length && !isScrolling;

    if (isScrollingEnable) {
        const fromSectionIdentifier = getSectionId(currentSectionIdx);
        const toSectionIdentifier = getSectionId(sectionIdx);

        if (
            isSectionId(fromSectionIdentifier) &&
            isSectionId(toSectionIdentifier)
        ) {
            currentSectionIdx = sectionIdx;
            const currentSection = sections[currentSectionIdx];

            isScrolling = true;

            dispatchScrollChange(fromSectionIdentifier, toSectionIdentifier);
            scrollAnimation(currentSection, onScrollComplete);

            sessionStorage.setItem('sectionIdx', String(sectionIdx));
        }
    }
};

export const scrollToSectionByIdentifier = (sectionIdentifier: SectionId) => {
    const sectionIdx = sections.findIndex(
        (section) => section.getAttribute('id') === sectionIdentifier
    );

    if (sectionIdx != -1) {
        scrollToSectionByIdx(sectionIdx);
    }
};

export const prevSection = () => scrollToSectionByIdx(currentSectionIdx - 1);
export const nextSection = () => scrollToSectionByIdx(currentSectionIdx + 1);

const setInitialScrollPosition = () => {
    if (hasPageBeenRefreshed()) {
        const currentSectionBeforeReloadIdx = sessionStorage.getItem(
            'sectionIdx'
        );
        if (currentSectionBeforeReloadIdx) {
            scrollToSectionByIdx(Number(currentSectionBeforeReloadIdx));
        }
    } else {
        scrollToSectionByIdentifier('start');
    }
};

export const getCurrentSection = () => getSectionId(currentSectionIdx);

export const runCustomScroll = () => {
    handleControls();
    handleNavigateButtons();
    setInitialScrollPosition();

    window.addEventListener('resizefixvh', () => {
        scrollAnimation(sections[currentSectionIdx], onScrollComplete);
    });
};

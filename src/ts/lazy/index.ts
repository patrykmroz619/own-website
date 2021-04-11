import { isSectionId } from '@utils/isSectionId';
import { addAllSectionsScrollListener } from '@utils/sectionScrollListener';
import { getCurrentSection } from '../features/global/customScroll';
import * as lazyFeatures from './lazyFeatures';

const state = {
    start: false,
    about: false,
    portfolio: false,
    technologies: false,
    contact: false,
};

let isAllSectionLoaded = false;

const onSection = (section: SectionId) => {
    if (!isAllSectionLoaded) {
        if ((section === 'start' || section === 'about') && !state.start) {
            state.start = true;
            lazyFeatures.background();
        }
        if (
            (section === 'start' ||
                section === 'about' ||
                section === 'portfolio') &&
            !state.about
        ) {
            state.about = true;
            lazyFeatures.about();
        }
        if (
            (section === 'about' ||
                section === 'portfolio' ||
                section === 'technologies') &&
            !state.portfolio
        ) {
            state.portfolio = true;
            lazyFeatures.portfolio();
        }
        if (
            (section === 'portfolio' ||
                section === 'technologies' ||
                section === 'contact') &&
            !state.technologies
        ) {
            state.technologies = true;
            lazyFeatures.technologies();
        }
        if (
            (section === 'technologies' || section === 'contact') &&
            !state.contact
        ) {
            state.contact = true;
            lazyFeatures.contact();
        }

        isAllSectionLoaded = Object.values(state).every((x) => x);
    }
};

export const handleLazyFeatures = () => {
    addAllSectionsScrollListener((from, to) => onSection(to));

    const currentSection = getCurrentSection();
    if (isSectionId(currentSection)) {
        onSection(currentSection);
    }
};

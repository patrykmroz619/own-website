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

const getSectionElement = (sectionId: SectionId) =>
    document.getElementById(sectionId) as HTMLElement;

const onSection = (sectionId: SectionId) => {
    if (!isAllSectionLoaded) {
        if ((sectionId === 'start' || sectionId === 'about') && !state.start) {
            state.start = true;
            const startSection = getSectionElement('start');
            lazyFeatures.background(startSection);
        }
        if (
            (sectionId === 'start' ||
                sectionId === 'about' ||
                sectionId === 'portfolio') &&
            !state.about
        ) {
            state.about = true;
            const aboutSection = getSectionElement('about');
            lazyFeatures.about(aboutSection);
        }
        if (
            (sectionId === 'about' ||
                sectionId === 'portfolio' ||
                sectionId === 'technologies') &&
            !state.portfolio
        ) {
            state.portfolio = true;
            const portfolioSection = getSectionElement('portfolio');
            lazyFeatures.portfolio(portfolioSection);
        }
        if (
            (sectionId === 'portfolio' ||
                sectionId === 'technologies' ||
                sectionId === 'contact') &&
            !state.technologies
        ) {
            state.technologies = true;
            const technologiesSection = getSectionElement('technologies');
            lazyFeatures.technologies(technologiesSection);
        }
        if (
            (sectionId === 'technologies' || sectionId === 'contact') &&
            !state.contact
        ) {
            state.contact = true;
            const contactSection = getSectionElement('contact');
            lazyFeatures.contact(contactSection);
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

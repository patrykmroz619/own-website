import { runCustomScroll } from './global/customScroll';
import { handleCustomCursor } from './global/customCursor';
import { handleColorSchemes } from './global/colorScheme';
import { runOnHoverTextEffect } from './global/onHoverTextEffect';
import { handleKeyboardNavigation } from './global/keyboardNavigation';
import { runScrollAnimationOnStartSection } from './start/scrollAnimation';
import * as lazyFeatures from './lazyFeatures';
import { addAllSectionsScrollListener } from '@utils/sectionScrollListener';

export const runFeatures = () => {
    handleCustomCursor();
    handleColorSchemes();
    handleKeyboardNavigation();
    runOnHoverTextEffect();
    runScrollAnimationOnStartSection();

    handleLazyFeatures();

    runCustomScroll();
};

const handleLazyFeatures = () => {
    const state = {
        start: false,
        about: false,
        portfolio: false,
        technologies: false,
        contact: false,
    };

    let isAllSectionLoaded = false;

    addAllSectionsScrollListener((from, to) => {
        if (!isAllSectionLoaded) {
            if ((to === 'start' || to === 'about') && !state.start) {
                console.log('start');
                state.start = true;
                lazyFeatures.background();
            }
            if (
                (to === 'start' || to === 'about' || to === 'portfolio') &&
                !state.about
            ) {
                console.log('about');

                state.about = true;
                lazyFeatures.about();
            }
            if (
                (to === 'about' ||
                    to === 'portfolio' ||
                    to === 'technologies') &&
                !state.portfolio
            ) {
                state.portfolio = true;
                console.log('portfolio');
                lazyFeatures.portfolio();
            }
            if (
                (to === 'portfolio' ||
                    to === 'technologies' ||
                    to === 'contact') &&
                !state.technologies
            ) {
                state.technologies = true;
                console.log('technologies');
                lazyFeatures.technologies();
            }
            if ((to === 'technologies' || to === 'contact') && !state.contact) {
                state.contact = true;
                console.log('contact');
                lazyFeatures.contact();
            }

            isAllSectionLoaded = Object.values(state).every((x) => x);
        }
    });
};

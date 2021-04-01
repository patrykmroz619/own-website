import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { gsap, Back } from 'gsap';

const heading = document.querySelector('.hero__heading') as HTMLElement;
const subheading = document.querySelectorAll('.hero__subheading');
const button = document.querySelector('.hero__button') as HTMLElement;
const background = document.querySelector('.main__background') as HTMLElement;
const colorModeToggler = document.querySelector(
    '.colorModeToggler'
) as HTMLElement;

let timeline: gsap.core.Timeline;

const fadeIn = () => {
    timeline = gsap.timeline();

    timeline.fromTo(
        heading,
        {
            scale: 0.5,
            y: 15,
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: Back.easeOut,
        }
    );

    timeline.fromTo(
        subheading,
        {
            y: 20,
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
        },
        '-=0.2'
    );

    timeline.to(
        button,
        {
            opacity: 1,
            duration: 0.5,
        },
        '-=0.2'
    );

    timeline.to(
        background,
        {
            opacity: 0.6,
            duration: 1.5,
        },
        '-=1'
    );

    timeline.to(colorModeToggler, {
        opacity: 1,
    });
};

const fadeOut = () => {
    gsap.to([heading, subheading, button, background, colorModeToggler], {
        opacity: 0,
    });
};

export const runScrollAnimation = () => {
    addSectionScrollListener('start', (isSectionVisible) => {
        if (isSectionVisible) {
            fadeIn();
        } else {
            fadeOut();
        }
    });

    fadeIn();
};

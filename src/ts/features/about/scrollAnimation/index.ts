import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const aboutSection = document.querySelector('.about') as HTMLElement;
const image = document.querySelector('.imageSection__imageBox') as HTMLElement;
const headingBackground = document.querySelector(
    '.contentSection__headingBackground'
) as HTMLElement;
const heading = document.querySelector(
    '.contentSection__heading'
) as HTMLElement;
const texts = [...document.querySelectorAll('.about__contentSection p')];

export const applyScrollAnimations = () => {
    gsap.to(image, {
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top center',
        },
        opacity: 1,
        x: 0,
        delay: 1,
        duration: 2,
    });

    const contentTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: aboutSection,
            start: 'top center',
        },
    });

    contentTimeline.to(headingBackground, {
        scaleX: 1,
        duration: 0.8,
    });

    contentTimeline.to(heading, {
        opacity: 1,
        duration: 0.01,
    });

    contentTimeline.to(headingBackground, {
        transformOrigin: 'top right',
        scaleX: 0,
        duration: 0.8,
    });

    texts.forEach((text) => {
        contentTimeline.to(
            text,
            {
                opacity: 1,
            },
            '-=0.1'
        );
    });
};

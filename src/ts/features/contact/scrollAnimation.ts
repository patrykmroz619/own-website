import { gsap } from 'gsap';
import { getHeadingAnimationTimeline } from '@utils/headingTimeline';

const headingWrapper = document.querySelector(
    '.contact__headingWrapper'
) as HTMLElement;
const formWrapper = document.querySelector(
    '.contact__formWrapper'
) as HTMLElement;
const linksWrapper = document.querySelector(
    '.contact__socialLinks'
) as HTMLElement;
const formLabel = document.querySelector('.contact__formLabel') as HTMLElement;
const inputs = [...document.querySelectorAll('.contact__input')];
const button = document.querySelector('.contact__button') as HTMLElement;
const links = [...document.querySelectorAll('.contact__link')];

const elements = [formLabel, ...inputs, button, ...links];

let timeline: gsap.core.Timeline;

export const fadeIn = () => {
    timeline = gsap.timeline();

    gsap.set([headingWrapper, formWrapper, linksWrapper], { y: 0, opacity: 1 });
    const headingTimeline = getHeadingAnimationTimeline(headingWrapper);
    timeline.add(headingTimeline);

    elements.forEach((el) => {
        timeline.fromTo(
            el,
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
            },
            '-=0.3'
        );
    });
};

export const fadeOut = () => {
    timeline.pause();

    gsap.to([headingWrapper, formWrapper, linksWrapper], { y: 30, opacity: 0 });
};

import gsap from 'gsap';
import { addSectionScrollListener } from '@utils/sectionScrollListener';
import { getHeadingAnimationTimeline } from '@utils/headingTimeline';

const image = document.querySelector('.imageSection__imageBox') as HTMLElement;
const headingWrapper = document.querySelector(
    '.contentSection__headingWrapper'
) as HTMLElement;
const texts = [...document.querySelectorAll('.about__contentSection p')];

let contentTimeline: gsap.core.Timeline;

const fadeIn = () => {
    gsap.fromTo(
        image,
        {
            opacity: 0,
            x: -100,
        },
        {
            opacity: 1,
            x: 0,
            delay: 1,
            duration: 2,
        }
    );

    gsap.set(headingWrapper, { x: 0, opacity: 1 });

    contentTimeline = gsap.timeline();

    const headingTimeline = getHeadingAnimationTimeline(headingWrapper);

    contentTimeline.add(headingTimeline);

    texts.forEach((text) => {
        contentTimeline.fromTo(
            text,
            {
                opacity: 0,
                x: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
            },
            '-=0.1'
        );
    });
};

const fadeOut = () => {
    gsap.to(image, {
        opacity: 0,
        x: -100,
    });

    contentTimeline.clear(true);

    gsap.to([headingWrapper, texts], { opacity: 0, x: 100 });
};

export const applyScrollAnimations = () => {
    addSectionScrollListener('about', (sectionVisible) => {
        if (sectionVisible) {
            fadeIn();
        } else {
            fadeOut();
        }
    });
};

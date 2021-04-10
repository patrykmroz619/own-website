import { gsap } from 'gsap';

import { getHeadingAnimationTimeline } from '@utils/headingTimeline';

const projectImagesWrapper = document.querySelector(
    '.portfolio__projectsImagesWrapper'
) as HTMLElement;
const navigation = document.querySelector(
    '.portfolio__projectsNavigation'
) as HTMLElement;
const headingWrapper = document.querySelector(
    '.portfolio__headingWrapper'
) as HTMLElement;
const projectsWrapper = document.querySelector(
    '.portfolio__content'
) as HTMLElement;

let timeline: gsap.core.Timeline;

export const fadeInElements = () => {
    timeline = gsap.timeline();

    gsap.set(headingWrapper, { opacity: 1 });
    gsap.set([projectsWrapper, projectImagesWrapper], { opacity: 1, x: 0 });

    const headingTimeline = getHeadingAnimationTimeline(headingWrapper);

    timeline.add(headingTimeline);

    timeline.fromTo(
        navigation,
        {
            x: '-100%',
            opacity: 1,
        },
        {
            x: 0,
            duration: 1,
        },
        '-=1'
    );

    timeline.fromTo(
        projectImagesWrapper,
        { opacity: 0, x: 0 },
        {
            opacity: 1,
            duration: 1,
        },
        '-=1'
    );
};

export const fadeOutElements = () => {
    if (timeline) {
        timeline.pause();
    }

    gsap.to([navigation, projectImagesWrapper, headingWrapper], { opacity: 0 });

    gsap.to(projectImagesWrapper, {
        opacity: 0,
        x: -40,
    });

    gsap.to(projectsWrapper, {
        opacity: 0,
        x: 40,
    });
};

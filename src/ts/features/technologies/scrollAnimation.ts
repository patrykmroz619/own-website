import { getHeadingAnimationTimeline } from '@utils/headingTimeline';
import { gsap } from 'gsap';

const headingWrapper = document.querySelector(
    '.technologies__headingWrapper'
) as HTMLElement;
const description = document.querySelector(
    '.technologies__description'
) as HTMLElement;
const board = document.querySelector('.technologies__board') as HTMLElement;

let timeline: gsap.core.Timeline;

export const fadeIn = () => {
    timeline = gsap.timeline();

    gsap.set(headingWrapper, { x: 0, opacity: 1 });
    const headingTimeline = getHeadingAnimationTimeline(headingWrapper);

    timeline.add(headingTimeline);

    timeline.fromTo(
        description,
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

    timeline.fromTo(
        board,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            x: 0,
        }
    );
};

export const fadeOut = () => {
    if (timeline) {
        timeline.pause();
    }

    gsap.to([headingWrapper, description], { opacity: 0, x: -100 });
    gsap.to(board, { opacity: 0, x: 100 });
};

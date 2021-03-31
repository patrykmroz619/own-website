import gsap from 'gsap';

export const getHeadingAnimationTimeline = (headingWrapper: HTMLElement) => {
    const timeline = gsap.timeline();

    const heading = headingWrapper.querySelector(
        '.headingWrapper__heading'
    ) as HTMLElement;
    const background = headingWrapper.querySelector(
        '.headingWrapper__background'
    ) as HTMLElement;

    timeline.fromTo(
        background,
        {
            transformOrigin: 'top left',
            scaleX: 0,
        },
        {
            scaleX: 1,
            duration: 0.8,
        }
    );

    timeline.fromTo(
        heading,
        {
            opacity: 0,
            x: 0,
        },
        {
            opacity: 1,
            duration: 0.01,
        }
    );

    timeline.to(background, {
        transformOrigin: 'top right',
        scaleX: 0,
        duration: 0.8,
    });

    return timeline;
};

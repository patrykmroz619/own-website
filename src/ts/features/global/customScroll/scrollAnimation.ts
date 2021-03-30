import gsap, { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollToPlugin);

export const scrollAnimation = (
    section: HTMLElement,
    onComplete: () => void
) => {
    gsap.to(window, {
        scrollTo: { y: section.offsetTop },
        duration: 1,
        onComplete,
    });
};

import { gsap } from 'gsap';
import { splitText } from '@utils/splitText';
import { getPrimaryColor } from '@utils/primaryColor';
import { getCssVariable } from '@utils/cssVariables';

export const applyTextEffects = (classesOfElements: string[]) => {
    const chars: HTMLElement[] = [];

    classesOfElements.forEach((classOfElement) =>
        chars.push(...splitText(classOfElement))
    );

    const onEnter = (char: HTMLElement) => {
        const tl = gsap.timeline();

        const primaryColor = getPrimaryColor();
        tl.to(char, {
            scaleY: 1.4,
            color: primaryColor,
            duration: 0.15,
        });

        tl.to(char, {
            scaleX: 1.4,
            duration: 0.15,
        });
    };

    const onLeave = (char: HTMLElement) => {
        const fontColor = getCssVariable('--font-color');
        gsap.to(char, {
            scale: 1,
            color: fontColor,
            duration: 0.3,
            clearProps: 'color',
        });
    };

    chars.forEach((char) => {
        char.addEventListener('touchstart', () => onEnter(char), {
            passive: true,
        });
        char.addEventListener('touchend', () => onLeave(char), {
            passive: true,
        });
        char.addEventListener('mouseenter', () => onEnter(char));
        char.addEventListener('mouseleave', () => onLeave(char));
    });
};

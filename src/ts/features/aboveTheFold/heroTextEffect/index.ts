import { gsap } from 'gsap';
import { splitText } from '@utils/splitText';
import { getPrimaryColor } from '@utils/primaryColor';
import { getCssVariable } from '@utils/cssVariables';

export const setHeroTextEffect = () => {
    const chars = [
        ...splitText('.hero__heading--first-line'),
        ...splitText('.hero__heading--second-line'),
    ];

    const onMouseEnter = (char: HTMLElement) => {
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

    const onMouseLeave = (char: HTMLElement) => {
        const fontColor = getCssVariable('--font-color');
        gsap.to(char, {
            scale: 1,
            color: fontColor,
            duration: 0.3,
            clearProps: 'color',
        });
    };

    chars.forEach((char) => {
        char.addEventListener('mouseenter', () => onMouseEnter(char));
        char.addEventListener('mouseleave', () => onMouseLeave(char));
    });
};

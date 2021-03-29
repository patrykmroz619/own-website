import { applyTextEffects } from './applyTextEffects';

const classessOfTextElements = [
    '.hero__heading--first-line',
    '.hero__heading--second-line',
    '.contentSection__heading',
    '.portfolio__heading',
];

export const runOnHoverTextEffect = () =>
    applyTextEffects(classessOfTextElements);

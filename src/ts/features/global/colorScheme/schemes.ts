import { setCssVariable } from '@utils/cssVariables';
import { getRandomColor } from './random';

type VariableName = string;
type VariableValue = string;

export type CSSVariable = [VariableName, VariableValue];

const randomColor = getRandomColor();

const darkModeColors: CSSVariable[] = [
    ['--font-color', '#eee'],
    ['--bg-color', '#152028'],
    ['--bg-transparent-layer', '#15202899'],
    ['--primary-color', randomColor.dark],
];

const lightModeColors: CSSVariable[] = [
    ['--font-color', '#222'],
    ['--bg-color', '#dee4e7'],
    ['--bg-transparent-layer', '#dee4e799'],
    ['--primary-color', randomColor.light],
];

const schemes = {
    dark: darkModeColors,
    light: lightModeColors,
};

export const applyColorScheme = (scheme: 'dark' | 'light') => {
    schemes[scheme].forEach((variable) => {
        const [name, value] = variable;

        setCssVariable(name, value);
    });
};

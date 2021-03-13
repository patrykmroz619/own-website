export const getCssVariable = (variable: string) => {
    return document.documentElement.style.getPropertyValue(variable).trim();
};

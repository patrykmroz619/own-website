export const getCssVariable = (name: string) => {
    return document.documentElement.style.getPropertyValue(name).trim();
};

export const setCssVariable = (name: string, value: string) => {
    document.documentElement.style.setProperty(name, value);
};

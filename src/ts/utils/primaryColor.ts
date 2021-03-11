export const getPrimaryColor = () => {
    return getComputedStyle(document.documentElement)
        .getPropertyValue('--primary-color')
        .trim();
};

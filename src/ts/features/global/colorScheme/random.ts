type ColorVariants = {
    light: string;
    dark: string;
};

const red: ColorVariants = {
    dark: '#FC5130',
    light: '#dc300f',
};

const blue: ColorVariants = {
    dark: '#30BCED',
    light: '#1891bb',
};

const darkBlue: ColorVariants = {
    dark: '#3e4ec4',
    light: '#3e4ec4',
};

const green: ColorVariants = {
    dark: '#17d14f',
    light: '#19a242',
};

const orange: ColorVariants = {
    dark: '#d17e17',
    light: '#f18f14',
};

const colors: ColorVariants[] = [red, blue, green, orange, darkBlue];

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
};

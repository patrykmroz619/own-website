type ColorVariants = {
    light: string;
    dark: string;
};

const red: ColorVariants = {
    dark: '#FC5130',
    light: '#FC5130',
};

const purple: ColorVariants = {
    dark: '#7e50d3',
    light: '#7e50d3',
};

const blue: ColorVariants = {
    dark: '#30BCED',
    light: '#1891bb',
};

const green: ColorVariants = {
    dark: '#17d14f',
    light: '#19a242',
};

const colors: ColorVariants[] = [red, purple, blue, green];

export const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    return colors[randomIndex];
};

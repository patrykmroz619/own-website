const colors = ['#7e50d3', '#FC5130', '#30BCED'];

export const setRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);

    document.documentElement.style.setProperty(
        '--primary-color',
        colors[randomIndex]
    );
};

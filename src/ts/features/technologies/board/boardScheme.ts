const javaScript = {
    name: 'JavaScript',
    iconSrc: 'assets/icons/javascript.svg',
};
const react = {
    name: 'React',
    iconSrc: 'assets/icons/react.svg',
};
const wordpress = {
    name: 'Wordpress',
};
const woocommerce = {
    name: 'WooCommerce',
};
const mongo = {
    name: 'Mongo db',
};
const sql = {
    name: 'SQL',
};
const redux = {
    name: 'Redux',
};
const gsap = {
    name: 'GSAP',
};
const git = {
    name: 'Git',
};
const adobeXd = {
    name: 'Adobe XD',
};
const vscode = {
    name: 'Visual Studio Code',
};
const three = {
    name: 'THREE JS',
};
const express = {
    name: 'Express.js',
};
const jest = {
    name: 'Jest',
};
const webpack = {
    name: 'Webpack',
};
const snowpack = {
    name: 'Snowpack',
};
const testingLibrary = {
    name: 'Testing Library',
};
const typeScript = {
    name: 'TypeScript',
};
const cypress = {
    name: 'Cypress',
};
const nodejs = {
    name: 'Node.js',
};
const php = {
    name: 'PHP',
};
const next = {
    name: 'Next.js',
};
const gatsby = {
    name: 'Gatsby',
};
const slim = {
    name: 'Slim framework',
};

const html = {
    name: 'HTML',
    iconSrc: 'assets/icons/html.svg',
};

const css = {
    name: 'CSS',
    iconSrc: 'assets/icons/css.svg',
};

const sass = {
    name: 'SASS',
};

export const boardScheme: TechnologiesBoardScheme = [
    [null, null, testingLibrary, cypress, jest, null, null],
    [adobeXd, sass, css, html, gatsby, next, gsap],
    [typeScript, javaScript, react, redux, nodejs, mongo, sql],
    [git, slim, php, wordpress, woocommerce, express, vscode],
    [null, null, webpack, snowpack, three, null, null],
];

export const boardXElements = boardScheme[0].length;
export const boardYElements = boardScheme.length;

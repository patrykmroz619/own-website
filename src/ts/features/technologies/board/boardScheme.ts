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
    iconSrc: 'assets/icons/wordpress.svg',
};
const woocommerce = {
    name: 'WooCommerce',
    iconSrc: 'assets/icons/woocommerce.svg',
};
const mongo = {
    name: 'Mongo db',
    iconSrc: 'assets/icons/mongo.svg',
};
const sql = {
    name: 'SQL',
    iconSrc: 'assets/icons/sql.svg',
};
const redux = {
    name: 'Redux',
    iconSrc: 'assets/icons/redux.svg',
};
const gsap = {
    name: 'GSAP',
    iconSrc: 'assets/icons/gsap.svg',
};
const git = {
    name: 'Git',
    iconSrc: 'assets/icons/git.svg',
};
const adobeXd = {
    name: 'Adobe XD',
    iconSrc: 'assets/icons/adobexd.svg',
};
const vscode = {
    name: 'Visual Studio Code',
    iconSrc: 'assets/icons/vscode.svg',
};
const three = {
    name: 'THREE JS',
    iconSrc: 'assets/icons/three.svg',
};
const express = {
    name: 'Express.js',
    iconSrc: 'assets/icons/express.svg',
};
const jest = {
    name: 'Jest',
    iconSrc: 'assets/icons/jest.svg',
};
const webpack = {
    name: 'Webpack',
    iconSrc: 'assets/icons/webpack.svg',
};
const snowpack = {
    name: 'Snowpack',
    iconSrc: 'assets/icons/snowpack.svg',
};
const testingLibrary = {
    name: 'Testing Library',
    iconSrc: 'assets/icons/testing-library.png',
};
const typeScript = {
    name: 'TypeScript',
    iconSrc: 'assets/icons/typescript.svg',
};
const cypress = {
    name: 'Cypress',
    iconSrc: 'assets/icons/cypress.svg',
};
const nodejs = {
    name: 'Node.js',
    iconSrc: 'assets/icons/node.svg',
};
const php = {
    name: 'PHP',
    iconSrc: 'assets/icons/php.svg',
};
const next = {
    name: 'Next.js',
    iconSrc: 'assets/icons/next.svg',
};
const gatsby = {
    name: 'Gatsby',
    iconSrc: 'assets/icons/gatsby.svg',
};
const slim = {
    name: 'Slim framework',
    iconSrc: 'assets/icons/slim.svg',
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
    iconSrc: 'assets/icons/sass.svg',
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

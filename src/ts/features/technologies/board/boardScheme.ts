const javaScript = {
    name: 'JavaScript',
    iconSrc: 'assets/icons/javascript.svg',
};
const react = {
    name: 'React',
    iconSrc: 'assets/icons/react.svg',
};
const solidity = {
    name: 'Solidity',
    iconSrc: 'assets/icons/solidity.svg',
};
const evmBlockchains = {
    name: 'EVM blockchain',
    iconSrc: 'assets/icons/ethereum.svg',
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
const openzeppeling = {
    name: 'OpenZeppelin',
    iconSrc: 'assets/icons/openzeppelin.svg',
};
const git = {
    name: 'Git',
    iconSrc: 'assets/icons/git.svg',
};
const hardhat = {
    name: 'Hardhat',
    iconSrc: 'assets/icons/hardhat.svg',
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
const vite = {
    name: 'Vite',
    iconSrc: 'assets/icons/vitejs.svg',
};
const ethers = {
    name: 'Ethers.js',
    iconSrc: 'assets/icons/ethers.svg',
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
const nest = {
    name: 'NestJS',
    iconSrc: 'assets/icons/nestjs.svg',
};
const next = {
    name: 'Next.js',
    iconSrc: 'assets/icons/next.svg',
};
const gatsby = {
    name: 'Gatsby',
    iconSrc: 'assets/icons/gatsby.svg',
};
const cryptoWallets = {
    name: 'Portfele krypto',
    iconSrc: 'assets/icons/metamask.svg',
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
    [null, null, jest, cypress, three, null, null],
    [git, sass, css, html, gatsby, next, redux],
    [openzeppeling, javaScript, react, typeScript, nodejs, mongo, sql],
    [hardhat, evmBlockchains, solidity, cryptoWallets, nest, express, vscode],
    [null, null, webpack, vite, ethers, null, null],
];

export const boardXElements = boardScheme[0].length;
export const boardYElements = boardScheme.length;

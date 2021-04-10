/** @type {import("snowpack").SnowpackUserConfig } */
// eslint-disable-next-line no-undef
module.exports = {
    mount: {
        src: '/',
    },
    alias: {
        '@utils': './src/ts/utils',
    },
    packageOptions: {
        types: true,
    },
    plugins: [
        '@snowpack/plugin-typescript',
        [
            '@snowpack/plugin-sass',
            {
                compilerOptions: {
                    style: 'compressed',
                },
            },
        ],
        [
            '@snowpack/plugin-webpack',
            {
                extendConfig: (config) => {
                    config.module.rules.push({
                        test: /.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                plugins: [
                                    '@babel/plugin-proposal-optional-chaining',
                                    '@babel/plugin-proposal-nullish-coalescing-operator',
                                ],
                            },
                        },
                    });

                    return config;
                },
            },
        ],
        '@snowpack/plugin-dotenv',
    ],
};

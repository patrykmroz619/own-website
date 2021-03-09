/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        src: '/',
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
                                ],
                            },
                        },
                    });

                    return config;
                },
            },
        ],
    ],
};

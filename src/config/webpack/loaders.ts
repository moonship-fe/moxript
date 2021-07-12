const getCssLoader = () => {
    return {
        loader: 'css-loader',
        options: {
            modules: true,
        }
    }
};

export default (options: any) => {
    process.env.BABEL_ENV = options.env;

    return [
        {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                presets: [
                    [
                        require.resolve('babel-preset-react-app')
                    ],
                ],
                sourceMaps: true,
                inputSourceMap: true
            },
        },
        {
            test: /\.css$/,
            use: [
                require.resolve('style-loader'),
                getCssLoader(),
                // TODO:: scope css
                require.resolve('postcss-loader')
            ],
        },
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                getCssLoader(),
                // TODO:: scope css
                require.resolve('postcss-loader'),
                require.resolve('less-loader'),
            ]
        }
    ]
}
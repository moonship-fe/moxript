import {ICommandContext} from "@/utils/commandContext";
import {RuleSetRule} from "webpack";

const getCssLoader = () => {
    return {
        loader: 'css-loader',
        options: {
            modules: true,
        }
    }
};

export default (commandContext: ICommandContext): Array<RuleSetRule> => {
    const {env} = commandContext;
    process.env.BABEL_ENV = env;

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
                require.resolve('postcss-loader')
            ],
        },
        {
            test: /\.less$/,
            use: [
                require.resolve('style-loader'),
                getCssLoader(),
                require.resolve('postcss-loader'),
                require.resolve('less-loader'),
            ]
        }
    ]
}
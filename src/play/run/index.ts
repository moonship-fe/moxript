import {sync as resolve} from 'resolve';
import {generateWebpackConfig} from "@/config/webpack";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server/lib/Server";
import path from "path";

export default async (options: any) => {
    const playEntryPath = resolve('../../../templates/play/entry.js.tpl');
    const config = generateWebpackConfig({
        ...options,
        entry: {
            name: 'index',
            config: {
                html: {
                    title: 'PlayGround',
                },
            },
            template: resolve('../../../templates/play/html.ejs'),
            file: playEntryPath,
        },
        loaders: [
            {
                test: playEntryPath,
                use: [
                    {
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
                        loader: resolve('../loader'),
                        options: {
                            componentTypeName: 'Janlay',
                            componentModulePath: path.resolve(options.cwd, options.target),
                            injectResources: [],
                            wrapper: 'children',
                        },
                    }
                ]

            },
        ]
    });

    const compiler = webpack(config);
    const devServerOptions = {};
    const server = new WebpackDevServer(compiler, devServerOptions);

    server.listen(8080, '127.0.0.1', () => {
        console.log('Starting server on http://localhost:8080');
    });
}
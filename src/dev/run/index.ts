import webpack from 'webpack';
import WebpackDevServer from "webpack-dev-server/lib/Server";
import {generateWebpackConfig} from "@/config/webpack";

export default async (options: any) => {
    const config = generateWebpackConfig(options);
    const devServerOptions = {};
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, devServerOptions);

    server.listen(8080, '127.0.0.1', () => {
        console.log('Starting server on http://localhost:8080');
    });
}
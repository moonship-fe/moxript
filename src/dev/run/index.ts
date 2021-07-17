import webpack from 'webpack';
import WebpackDevServer from "webpack-dev-server/lib/Server";
import {generateWebpackConfig} from "@/config/webpack";
import {ICommandContext} from "@/utils/commandContext";

export default (commandContext: ICommandContext): void => {
    const config = generateWebpackConfig(commandContext);
    const devServer = commandContext.settings.devServer;
    const compiler = webpack(config);
    const server = new WebpackDevServer(compiler, devServer);
    server.listen(devServer.port, devServer.host, () => {
        console.log(`Starting server on http://${devServer.host}:${devServer.port}`);
    });
}
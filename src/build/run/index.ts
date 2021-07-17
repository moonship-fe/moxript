import webpack from 'webpack';
import {generateWebpackConfig} from "@/config/webpack";
import {ICommandContext} from "@/utils/commandContext";
import ora from "ora";
import logger from "@/utils/logger";

export default async (commandContext: ICommandContext): Promise<void> => {
    const config = generateWebpackConfig(commandContext);
    const spinner = ora('Building Project ......');
    spinner.start();
    const compiler = webpack(config)
    compiler.run((err, stats) => {
        if (err) {
            spinner.fail('Building Failed');
            logger.error(err.message)
            return;
        }
        spinner.succeed('Building Successful!');
        if (stats) {
            const statsJson = stats.toJson();
            logger.log('Build output: ' + statsJson.outputPath)
        }
    });
}
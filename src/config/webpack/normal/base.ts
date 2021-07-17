import path from 'path';
import {ICommandContext} from "@/utils/commandContext";
import {Configuration} from "webpack";

const getWebpackEntries = (commandContext: ICommandContext) => {
    const {cwd, settings: {pages}} = commandContext;
    return Object.keys(pages).reduce((entry, key) => {
        return {
            ...entry,
            [key]: pages[key].entry || path.join(cwd, `./src/pages/${key}/index.tsx`)
        }
    }, {})
}

export default (commandContext: ICommandContext): Configuration => {
    const {env, settings: {publicPath, outputDir, filenameHashing}} = commandContext;

    return {
        mode: env,
        entry: getWebpackEntries(commandContext),
        output: {
            filename: filenameHashing ? '[name].[chunkhash].js' : '[name].js',
            path: outputDir,
            publicPath,
        },
    }
}
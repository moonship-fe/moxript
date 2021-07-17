import baseConfig from './normal/base';

import loadersConfig from './loaders';
import pluginsConfig from './plugins';
import {ICommandContext} from "@/utils/commandContext";
import {Configuration} from "webpack";
import {merge} from 'webpack-merge';
import {get} from 'lodash';

const getSettingsWebpackConfig = (commandContext: ICommandContext): Configuration => {
    const configureWebpack = get(commandContext, 'commandContext.settings.configureWebpack');

    return (() => {
        if (!configureWebpack) {
            return {}
        }
        if (typeof configureWebpack === 'function') {
            return configureWebpack();
        } else if (typeof configureWebpack === 'object') {
            return configureWebpack
        }
    })()
};

export const generateWebpackConfig = (commandContext: ICommandContext): Configuration => {
    const settingsWebpackConfig = getSettingsWebpackConfig(commandContext);

    return merge({
        ...baseConfig(commandContext),
        module: {
            rules: [
                ...loadersConfig(commandContext)
            ]
        },
        plugins: [
            ...pluginsConfig(commandContext)
        ]
    }, settingsWebpackConfig)
}
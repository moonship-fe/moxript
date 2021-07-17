import HtmlWebpackPlugin, {Options as HtmlWebpackPluginOptions} from 'html-webpack-plugin';
import {ICommandContext} from "@/utils/commandContext";
import {IEntrySetting} from "@/settings/base";
import {WebpackPluginInstance} from "webpack";

const getHtmlPluginOption = (entryKey: string, page: IEntrySetting): HtmlWebpackPluginOptions => {
    const {template, filename, title} = page;

    return Object.assign({
        title,
        meta: {
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        filename: filename ? filename : `${entryKey}.html`,
        chunks: [entryKey],
    }, template ? {template} : {})
}

export const createHtmlInstance = (commandContext: ICommandContext): () => WebpackPluginInstance[] => {
    const pageKeys = Object.keys(commandContext.settings.pages);

    const pages = pageKeys.reduce((prev: HtmlWebpackPlugin[], key) => {
        const page = commandContext.settings.pages[key];
        const option = getHtmlPluginOption(key, page);
        const instance = new HtmlWebpackPlugin(option)
        return [
            ...prev,
            instance
        ]
    }, [])

    return () => pages;
}
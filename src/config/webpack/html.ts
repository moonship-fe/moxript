import HtmlWebpackPlugin, {Options as HTMLOptions} from 'html-webpack-plugin';

const getHtmlConfig = (filename: string, entry: any, options: any) => {
    const {name, template} = entry;
    return {
        title: 'apple',
        meta: {
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
        },
        chunks: [name],
    }
}

export const createHtmlInstance = (options: any) => {
    return (entry: any) => {
        const filename = `${entry.name}.html`;
        const pluginConfig = getHtmlConfig(filename, entry, options);
        return new HtmlWebpackPlugin(pluginConfig);
    }
}
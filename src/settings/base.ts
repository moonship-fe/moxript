import path from "path";
import {Configuration} from "webpack";
import {sync as resolve} from "resolve";
import WebpackDevServer from "webpack-dev-server";

export type IEntrySetting = {
    // page 的入口
    entry: string,
    // 模板来源
    template: string,
    // 在 dist/index.html 的输出
    filename: string,
    // 当使用 title 选项时，
    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    title: string,
}

export interface IBaseSettings {
    publicPath: string,
    outputDir: string,
    pages: Record<string, IEntrySetting>,
    filenameHashing: boolean,
    configureWebpack?: Configuration | ((config: Configuration) => Configuration) | undefined,
    devServer: WebpackDevServer.Configuration
}

export const getDefaultSettings = (cwd: string): IBaseSettings => {
    return {
        publicPath: './',
        outputDir: path.join(cwd, './dist'),
        pages: {
            index: {
                entry: path.join(cwd, './src/pages/index.tsx'),
                template: resolve('../../templates/entry-html/template.ejs'),
                filename: 'index.html',
                title: 'moxript-app',
            },
        },
        filenameHashing: true,
        configureWebpack: {
            loader: []
        },
        devServer: {
            host: '127.0.0.1',
            port: 8080,
        }
    }
}
import path from "path";

export const getDefaultSettings = (cwd: any) => {
    return {
        publicPath: './',
        outputDir: path.join(cwd, './dist'),
        appTitle: 'apple-banana',
        entry: {
            name: 'index'
        }
    }
}
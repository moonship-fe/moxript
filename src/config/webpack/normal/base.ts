import path from 'path';

export default (options: any) => {
    const {cwd, env, publicPath, outputDir, entry} = options;

    return {
        mode: env,
        entry: {
            [entry.name]: path.join(cwd, './src/index.js')
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: outputDir,
            publicPath,
        },
    }
}
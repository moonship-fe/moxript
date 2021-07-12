import path from 'path';

export default (options: any) => {
    const {cwd, env} = options;

    return {
        mode: env,
        entry: path.join(cwd, './src/index.js'),
        output: {
            filename: '[name].[chunkhash].js',
            path: path.join(cwd, 'dist'),
            publicPath: '/assets/',
        },
    }
}
import path from 'path';

export default (cwd: string) => {
    return {
        mode: 'production',
        entry: path.join(cwd, './src/index.js'),
        output: {
            filename: '[name].[chunkhash].js',
            path: path.join(cwd, 'dist'),
            publicPath: '/assets/',
        },
    }
}
import webpack from 'webpack';

import {generateWebpackConfig} from "../../config/webpack";

export default async (pwd: string) => {
    const config = generateWebpackConfig(pwd);
    console.log(config);
    // @ts-ignore
    const compiler = webpack(config)
    compiler.run((err, stats) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(stats);
    });

}
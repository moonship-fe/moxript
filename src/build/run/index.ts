import webpack from 'webpack';
import {generateWebpackConfig} from "@/config/webpack";

export default async (options: any) => {
    const config = generateWebpackConfig(options);
    const compiler = webpack(config)
    compiler.run((err, stats) => {
        if (err) {
            return;
        }
    });

}
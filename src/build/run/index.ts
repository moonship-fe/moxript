import {webpack} from 'webpack';

import {generateWebpackConfig} from "../../config/webpack/index";

export default async (pwd: string) => {
    const config = generateWebpackConfig(pwd);
    console.log(config);
    // @ts-ignore
    webpack(config).run(() => {})
}
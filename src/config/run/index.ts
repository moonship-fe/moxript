import {generateWebpackConfig} from "../webpack";

export default async (pwd: string) => {
    return generateWebpackConfig(pwd)
}
import {generateWebpackConfig} from "@/config/webpack";

export default async (pwd: string) => {
    return generateWebpackConfig(pwd)
}
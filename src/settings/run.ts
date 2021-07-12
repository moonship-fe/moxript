import path from "path";
import logger from "../utils/logger";
import {promises as fs} from 'fs';

export default async (options: any) => {
    if (options.valid) {
        if (!options.file) {
            logger.error("please input your filepath（use -f command）")
            return;
        }

        const settingsPath = path.join(options.cwd, options.file);
        const settingsContent = await fs.readFile(settingsPath, {encoding: 'utf8'})

        console.log(settingsContent);
    }
}
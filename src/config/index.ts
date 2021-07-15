require('module-alias/register')
import run from './run';
import logger from "@/utils/logger";

(async () => {
    const cwd = process.argv[2] || process.cwd();
    const config = await run(cwd);
    logger.log(JSON.stringify(config))
})()
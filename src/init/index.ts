require('module-alias/register')
import logger from "@/utils/logger";
import run from './run';

(async () => {
    const cwd = process.argv[2] || process.cwd();
    // const options = await askForOptions();
    await run(cwd, {
        packageName: process.argv[2]
    });
    logger.log('项目初始化完毕')
})()
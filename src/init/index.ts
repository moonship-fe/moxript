require('module-alias/register')
import logger from "@/utils/logger";
import run from './run';

(async () => {
    const cwd = process.cwd();
    const packageName = process.argv[2];
    if (!packageName) {
        logger.error('Please input your project name')
        return;
    }

    await run({
        cwd,
        packageName
    });
    logger.log('项目初始化完毕')
})()
import {generateCommandContext} from "@/utils/commandContext";

require('module-alias/register')
import run from './run';
import logger from "@/utils/logger";

(async () => {
    const context = generateCommandContext('production');
    const config = await run(context);
    logger.log(JSON.stringify(config))
})()
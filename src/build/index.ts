require('module-alias/register')
import {generateCommandContext} from "@/utils/commandContext";
import run from './run';

(async () => {
    const context = generateCommandContext('production');
    await run(context);
})()
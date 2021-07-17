
require('module-alias/register')
import {generateCommandContext} from "@/utils/commandContext";
import run from './run';

(() => {
    const context = generateCommandContext('production');
    run(context);
})()
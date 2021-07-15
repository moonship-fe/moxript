require('module-alias/register')
import run from './run';
import {getSettings} from "@/settings";

(async () => {
    const cwd = process.cwd();
    console.log(cwd);
    const settings = getSettings(cwd);
    await run({
        cwd,
        env: 'development',
        target: process.argv[2],
        ...settings
    });
})()
import run from './run';
import logger from "../utils/logger";
import {getSettings} from "../settings";

(async () => {
    const cwd = process.argv[2] || process.cwd();
    const settings = getSettings(cwd);
    const config = await run({
        cwd,
        env: 'production',
        ...settings
    });
})()
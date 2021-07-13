import run from './run';
import {getSettings} from "../settings";

(async () => {
    const cwd = process.cwd();
    const settings = getSettings(cwd);
    await run({
        cwd,
        env: 'production',
        ...settings
    });
})()
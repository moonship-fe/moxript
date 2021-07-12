import run from './run';
import logger from "../utils/logger";

(async () => {
    const cwd = process.cwd();
    await run(cwd);
})()
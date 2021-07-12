import run from './run';
import {Command} from 'commander';

const program = new Command();
program
    .option('-v, --valid', 'validate moxript settings')
    .option('-f, --file <filepath>', 'moxript settings relative path');

(async () => {
    program.parse();
    const options = program.opts();
    await run({
        cwd: process.cwd(),
        ...options
    });
})()
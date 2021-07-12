import run from './run';

(async () => {
    const cwd = process.cwd();
    await run({
        cwd,
        env: 'production'
    });
})()
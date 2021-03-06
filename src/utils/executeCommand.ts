import chalk from 'chalk';
import readline from 'readline'
import execa from 'execa'

const toStartOfLine = (stream: any) => {
    if (!chalk.supportsColor) {
        stream.write('\r');
        return
    }
    readline.cursorTo(stream, 0)
};

const renderProgressBar = (curr: number, total: number) => {
    const ratio = Math.min(Math.max(curr / total, 0), 1);
    const bar = ` ${curr}/${total}`;
    const availableSpace = Math.max(0, process.stderr.columns - bar.length - 3);
    const width = Math.min(total, availableSpace);
    const completeLength = Math.round(width * ratio);
    const complete = `#`.repeat(completeLength);
    const incomplete = `-`.repeat(width - completeLength);
    toStartOfLine(process.stderr);
    process.stderr.write(`[${complete}${incomplete}]${bar}`)
    console.log(233)
};

export const executeCommand = (command: string, args: string[], cwd: string): Promise<unknown> => {
    return new Promise(((resolve, reject) => {
        const child = execa(command, args, {
            cwd,
            stdio: ['inherit', 'inherit', 'pipe']
        });

        child.stderr?.on('data', (buffer: Uint8Array | string) => {
            const str = buffer.toString();
            if (/warning/.test(str)) {
                return
            }

            const progressBarMatch = str.match(/\[.*] (\d+)\/(\d+)/);
            if (progressBarMatch) {
                renderProgressBar(parseFloat(progressBarMatch[1]), parseFloat(progressBarMatch[2]));
                return
            }

            process.stderr.write(buffer)
        });

        child.on('close', (code: unknown) => {
            if (code !== 0) {
                reject(new Error(`command failed: ${command} ${args.join(' ')}`));
                return
            }
            resolve(null)
        });
    }))
};

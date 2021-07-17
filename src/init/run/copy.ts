import path from 'path';
import {promises as fs} from 'fs';
import globby from 'globby';
import {IInitialProjectContext} from "@/utils/commandContext";
import ora from "ora";

export default async (options: IInitialProjectContext): Promise<void> => {
    const {cwd, packageName} = options;
    const spinner = ora('Copying and initialization files');
    spinner.start();
    const templateDirectory = path.join(__dirname, '../../../', 'templates', 'app');
    const files = await globby(`${templateDirectory}/**`, {dot: true});

    const copyFile = async (file: string) => {
        const relative = path.relative(templateDirectory, file);
        const destination = path.join(cwd, packageName, relative);
        await fs.mkdir(path.dirname(destination), {recursive: true});
        const content = await fs.readFile(file, 'utf-8');
        await fs.writeFile(
            destination,
            content.replace(/{{(\w+)}}/g, (match, key) => options[key].toString())
        );
    };
    await Promise.all(files.map(copyFile));
    spinner.succeed();
}
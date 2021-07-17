import {IInitialProjectContext} from "@/utils/commandContext";
import path from "path";
import {executeCommand} from "@/utils";

export default async (options: IInitialProjectContext): Promise<void> => {
    const {cwd, packageName} = options;
    const projectPath = path.join(cwd, packageName);
    await executeCommand('yarn', [
        'add',
        'react',
        'react-dom',
        '--save'
    ], projectPath);
    await executeCommand('yarn', [
        'add',
        '@types/react',
        '@types/react-dom',
        '--div'
    ], projectPath);
    return;
}
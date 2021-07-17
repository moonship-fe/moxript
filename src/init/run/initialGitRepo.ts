import simplegit from 'simple-git/promise';
import {IInitialProjectContext} from "@/utils/commandContext";
import path from "path";

export default async (options: IInitialProjectContext): Promise<void> => {
    const {cwd, packageName} = options;
    const projectPath = path.join(cwd, packageName);
    const git = simplegit(projectPath);
    await git.init()
    return;
}
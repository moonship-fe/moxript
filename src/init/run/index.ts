import {IInitialProjectContext} from "@/utils/commandContext";
import copyTemplate from './copy';
import installDependencies from './install';
import initialGitRepo from './initialGitRepo';

export default async (options: IInitialProjectContext): Promise<void> => {
    await copyTemplate(options);
    await installDependencies(options);
    await initialGitRepo(options);
}
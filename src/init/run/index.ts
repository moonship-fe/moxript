import copyTemplate from './copy';
import installDependencies from './install';
import initialGitRepo from './initialGit';

export default async (cwd: string, options: any) => {
    await copyTemplate(cwd, options);
    await installDependencies(cwd, options);
    await initialGitRepo(cwd, options);
}
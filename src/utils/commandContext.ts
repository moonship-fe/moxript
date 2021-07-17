import {getDefaultSettings, IBaseSettings} from "@/settings/base";

export interface ICommandContext {
    cwd: string,
    env: 'production' | 'development',
    settings: IBaseSettings
}

export interface IInitialProjectContext {
    cwd: string,
    packageName: string
}


export const generateCommandContext = (env: ICommandContext['env']): ICommandContext => {
    const cwd = process.cwd();
    return {
        cwd,
        env,
        settings: getDefaultSettings(cwd)
    }
}
// import path from "path";
// import logger from "../utils/logger";
import {getDefaultSettings} from "./base";

export const getSettings = (cwd: any) => {
    // const location = path.join(cwd, 'moxript.config.js');
    let settingExport = getDefaultSettings(cwd);

    // try {
    //     settingExport = require(location);
    // } catch (e) {
    //     logger.error('moxript settings load failed! Set default settings')
    // }
    return settingExport;
}
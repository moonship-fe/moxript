import {createHtmlInstance} from "./html";
import {ICommandContext} from "@/utils/commandContext";
import {WebpackPluginInstance} from "webpack";

export default (commandContext: ICommandContext): WebpackPluginInstance[] => {
    return [
        ...createHtmlInstance(commandContext)()
    ]
}
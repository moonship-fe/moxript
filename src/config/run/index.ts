import {generateWebpackConfig} from "@/config/webpack";
import {ICommandContext} from "@/utils/commandContext";
import {Configuration} from "webpack";

export default (context: ICommandContext): Configuration => {
    return generateWebpackConfig(context)
}
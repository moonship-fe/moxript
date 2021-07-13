import {createHtmlInstance} from "./html";

export default (options: any) => {
    return [
        createHtmlInstance(options)(options.entry)
    ]
}
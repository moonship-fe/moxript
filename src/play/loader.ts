import {LoaderContext} from 'webpack';

const loader = function playEntryLoader(this: LoaderContext<any>, content: any) {
    if (this.cacheable) {
        this.cacheable();
    }

    const options = this.getOptions();
    console.log(options);
    const extraImports = options.injectResources.map((e: any) => `import '${e}';`).join('\n');
    const replacements = [
        [/%COMPONENT_MODULE_PATH%/g, options.componentModulePath],
        [/%COMPONENT_TYPE_NAME%/g, options.componentTypeName],
        [/%EXTRA_IMPORTS%/g, extraImports],
        [/%WRAPPER_RETURN%/g, options.wrapper],
    ];
    const source = replacements.reduce(
        (source, [from, to]) => source.replace(from, to),
        content.toString()
    );
    this.callback(null, source);
};

export default loader;

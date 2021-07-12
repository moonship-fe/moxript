import {validate} from 'schema-utils';

const schema: any = {
    properties: {
        publicPath: {
            type: 'string',
        },
        outputDir: {
            type: 'string',
        },
        appTitle: {
            type: 'string',
        },
    },
    additionalProperties: false,
    type: 'object',
}

export default (value: any) => {
    validate(schema, value, {name: 'Your reskript.config.js'});
}
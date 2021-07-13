import baseConfig from './normal/base';

import loadersConfig from './loaders';
import pluginsConfig from './plugins';

export const generateWebpackConfig = (options: any) => {
    return {
        ...baseConfig(options),
        module: {
            rules: [
                ...loadersConfig(options)
            ]
        },
        plugins: [
            ...pluginsConfig(options)
        ]
    }
}
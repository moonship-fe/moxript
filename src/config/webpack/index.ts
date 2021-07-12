import baseConfig from './normal/base';

import loadersConfig from './loaders';
import pluginsConfig from './plugins';

export const generateWebpackConfig = (cwd: string) => {
    return {
        ...baseConfig(cwd),
        module: {
            rules: [
                ...loadersConfig()
            ]
        },
        plugins: [
            ...pluginsConfig()
        ]
    }
}
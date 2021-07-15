module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        node: true,
        es2021: true,
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts"]
        },
        "import/resolver": {
            "typescript": {
                "directory": "./tsconfig.json"
            },
        }
    },
};


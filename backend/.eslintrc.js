module.exports = {
    root: true,
    env: {
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        'max-len': ['error', { 'code': 120, 'ignoreUrls': true }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'quotes': ['error', 'single', { 'avoidEscape': true }], 
    },
};



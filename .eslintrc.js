module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'standard',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: ['@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
}
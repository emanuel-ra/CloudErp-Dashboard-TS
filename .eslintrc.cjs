module.exports = {
  root: true,
  env: { browser: true, es2020: true, jest: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    './node_modules/ts-standard/eslintrc.json'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
        parser: 'typescript',
        semi: [0, 'always']
      }
    ],
    indent: [2, 'tab'],
    'no-tabs': 0,
    'no-empty-function': 'error',
    "Parsing error: The keyword 'interface' is reserved": 'off',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      { checkCompoundAssignments: true }
    ],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ]
  }
}

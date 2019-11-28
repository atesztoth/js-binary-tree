// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
  parser: 'babel-eslint',

  extends: [
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype'
  ],

  plugins: ['flowtype', 'prettier'],

  globals: {
    __DEV__: true
  },

  env: { browser: false, node: true  },

  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix']
  },

  ignorePatterns: ["*.ts"],

  settings: {
    // Allow absolute paths in imports, e.g. import Button from 'components/Button'
    // https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src']
      }
    }
  }
}

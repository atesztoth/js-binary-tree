module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype'
  ],
  plugins: ['flowtype', 'prettier'],
  env: { browser: false, node: true  },
  rules: {
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix']
  },
  ignorePatterns: ["*.ts"],
}

module.exports = {
  hooks: {
    'pre-commit': 'yarn lint && yarn flow && yarn tsc --noEmit'
  }
}

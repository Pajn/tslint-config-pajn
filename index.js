const commonRules = {
  'comment-format': [true, 'check-space'],
  'no-duplicate-variable': true,
  'no-unsafe-finally': true,
  'no-unused-expression': [true],
  'no-var-keyword': true,
  'object-literal-key-quotes': [true, 'as-needed'],
  'object-literal-shorthand': true,
  'ordered-imports': [
    true,
    {
      'import-sources-order': 'lowercase-last',
      'named-imports-order': 'lowercase-last',
    },
  ],
  'prefer-for-of': true,
  'triple-equals': [true, 'allow-null-check'],
  'variable-name': [true, 'ban-keywords'],
}

module.exports = {
  jsRules: commonRules,
  rules: Object.assign(
    {
      'array-type': [true, 'generic'],
      'no-angle-bracket-type-assertion': true,
      'no-internal-module': true,
    },
    commonRules
  ),
}

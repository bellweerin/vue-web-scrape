// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-irregular-whitespace': 'off',
    'indent': 'off',
    'skipBlankLines': true,
    'ignoreComments': true,
    'no-trailing-spaces': [2, { "skipBlankLines": true }],
    "eol-last": 0,
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    'comma-dangle': ["error", "never"],
    "no-extra-semi": "off",
    'semi': 0,
    "space-before-function-paren": ["error", "never"],
    'space-after-keywords': 'never',
    

    // 'semi': ["error", "never"]
    // 'quotes': ["error", "double"]
  }
}

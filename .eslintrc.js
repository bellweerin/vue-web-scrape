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
    "generator-star-spacing": "off",
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-irregular-whitespace": "off",
    "no-trailing-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-extra-semi": "off",
    "no-multi-spaces": "off",
    "no-undef": "off",
    "no-dupe-keys": "off",
    "no-new": "off",
    "no-template-curly-in-string": "off",

    "arrow-spacing": "off",

    "indent": "off",
    "ignoreComments": true,

    "eol-last": 0,
    "eqeqeq": "off",

    "comma-dangle": "off",
    "comma-spacing": "off",
    "camelcase": "off",
    "curly": "error",
    
    "semi": "off",
    "semi-spacing": "off",
    "space-before-function-paren": "off",
    "space-after-keywords": 'never',
    "spaced-comment": "off",
    "space-before-blocks": "off",
    "space-infix-ops": "off",
    "space-in-parens": "off",
    "skipBlankLines": true,
    "space-unary-ops": "off",
    "no-unused-vars" : "off",

    "quotes": "off",

    "key-spacing": "off",
    "keyword-spacing": "off",
   
    "padded-blocks": "off",
   
    "brace-style": "off",
    "vue/no-dupe-keys": "off",

    "object-curly-even-spacing": "off",
    
    
  }
}

/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript"
  ],
  rules: {
    // JS
    "semi": ["error", "always"],
    "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
    "no-unused-vars": ["warn"],
    // Vue
    "vue/multi-word-component-names": ["off"],
    "vue/v-on-style": ["error", "longform"],
    "vue/v-bind-style": ["error", "longform"],
    "vue/v-slot-style": ["error", "longform"],
  },
  parserOptions: {
    ecmaVersion: "latest"
  }
};

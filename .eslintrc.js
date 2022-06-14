module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
    "prettier"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "vue"
  ],
  rules: {
    "vue/html-quotes": ["error", "double", { avoidEscape: false }],
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/html-closing-bracket-newline": ["error", {
      singleline: "never",
      multiline: "always"
    }],
    "vue/html-self-closing": ["error", {
      html: {
        void: "never",
        normal: "always",
        component: "always"
      }
    }],
    "vue/max-attributes-per-line": ["error", {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],
    "vue/html-indent": ["error", 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true
    }],
    "vue/first-attribute-linebreak": ["error", {
      singleline: "ignore",
      multiline: "below"
    }],
    "vue/multiline-html-element-content-newline": ["error", {
      ignoreWhenEmpty: true,
      allowEmptyLines: false
    }],
    "vue/singleline-html-element-content-newline": ["error", {
      ignoreWhenNoAttributes: false,
      ignoreWhenEmpty: true
    }],
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/no-multi-spaces": ["error", {
      ignoreProperties: false
    }],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/html-closing-bracket-spacing": ["error", {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "always"
    }],
    "vue/this-in-template": ["error", "never"],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/no-useless-v-bind": ["error", {
      ignoreIncludesComment: false,
      ignoreStringEscape: false
    }],
    "spaced-comment": [2, "always"],
    "no-multiple-empty-lines": [2, {
      max: 2
    }],
    "no-param-reassign": false
  }
};


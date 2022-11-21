module.exports = {
  ignorePatterns: [`!.eslintrc.js`],
  overrides: [
    { files: `.eslintrc.js`, env: { node: true } },
    {
      files: `*.{js,ts,tsx}`,
      extends: [
        `eslint:recommended`,
        `plugin:react/recommended`,
        `plugin:react/jsx-runtime`,
        `plugin:@typescript-eslint/recommended`,
        `prettier`,
      ],
      parser: `@typescript-eslint/parser`,
      plugins: [`filenames`, `import`, `react`, `react-hooks`],
      parserOptions: {
        project: [`./tsconfig.json`],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [`.ts`, `.tsx`],
        },
        'import/respolver': {
          typescript: {
            // https://github.com/import-js/eslint-import-resolver-typescript/blob/master/README.md#configuration
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': `error`,
        '@typescript-eslint/explicit-module-boundary-types': `error`,
        '@typescript-eslint/naming-convention': [
          `error`,
          {
            selector: `default`,
            format: [`camelCase`],
          },
          {
            selector: `objectLiteralProperty`,
            format: null,
          },
          {
            selector: `objectliteralMethod`,
            format: null,
          },
          {
            selector: `variable`,
            modifiers: [`destructured`],
            format: null,
          },
          {
            selector: `variable`,
            modifiers: [`const`, `global`],
            format: [`camelCase`, `PascalCase`, `UPPER_CASE`],
          },
          {
            selector: `parameter`,
            format: [`camelCase`, `PascalCase`],
          },
          {
            selector: `typeLike`,
            format: [`PascalCase`],
          },
          {
            selector: `enumMember`,
            format: [`PascalCase`],
          },
          {
            selector: `enumMember`,
            format: [`PascalCase`],
          },
        ],
        // https://eslint.org/docs/latest/rules/no-shadow
        '@typescript-eslint/no-shadow': `error`,
        '@typescript-eslint/no-unused-vars': `error`,
        '@typescript-eslint/no-use-before-define': `error`,
        '@typescript-eslint/no-useless-constructor': `error`,
        '@typescript-eslint/quotes': [`error`, `backtick`],
        // More explicit
        'arrow-body-style': [`error`, `always`],
        // More explicit
        'arrow-parens': [`error`, `always`],
        // More explicit
        curly: [`error`, `all`],
        'filenames/match-exported': `error`,
        //
        'func-style': [`error`, `expression`, { allowArrowFunctions: true }],
        'import/first': `error`,
        'import/no-extraneous-dependencies': `error`,
        'import/prefer-default-export': `off`,
        'no-console': `error`,
        'no-constant-condition': `error`,
        'no-iterator': `error`,
        'no-throw-literal': `error`,
        // usually best to avoid leaving TODO comments in the codebase but sometimes
        // it's necessary because the issue is not immediately fixable (e.g. "delete htis
        // once <package> fixes <issue>)
        // It's also helpful to flag stuff to come back to before committing work.
        // Use xxx to flag issues you want to fix before commiting, and
        // allow use of todo for things that cannot be addressed.
        'no-warning-comments': [
          `error`,
          {
            terms: [`XXX`],
          },
        ],
        'object-curly-spacing': [`error`, `always`],
        'object-shorthand': [`error`, `always`],
        'prefer-const': `error`,
        'react-hooks/exhaustive-deps': `error`,
        'react-hooks/rules-of-hooks': `error`,
        'react/jsx-closing-bracket-location': [
          `error`,
          { selfClosing: `tag-aligned`, nonEmpty: `after-props` },
        ],
        'react/jsx-sort-props': [
          `error`,
          {
            ignoreCase: true,
            reservedFirst: true,
          },
        ],
        'react/jsx-wrap-multilines': [
          `error`,
          {
            declaration: `parens-new-line`,
            assignment: `parens-new-line`,
            return: `parens-new-line`,
            arrow: `parens-new-line`,
            condition: `parens-new-line`,
            logical: `ignore`,
            prop: `ignore`,
          },
        ],
        'react/no-array-index-key': `error`,
        'react/no-danger': `error`,
        'react/prefer-stateless-function': `error`,
        'react/prop-types': `off`,
        'spaced-comment': [`error`, `always`],
      },
    },
  ],
};

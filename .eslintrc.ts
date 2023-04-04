module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    'import',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    // 'React' must be in scope when using JSX 에러 지우기(Next.js)
    'react/react-in-jsx-scope': 'off',
    // ts파일에서 tsx구문 허용(Next.js)
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }], //should add ".ts" if typescript project
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
  },
};

# @fieryeagle/eslint-config-react

Common eslint + prettier config for React that comes with most dependencies and a patch package to allow minimal setup in userland.

## Why?

Initial setup of linting and formatting get repeated over and over across codebases and teams, wasting alot of time and maintenance with duplicated then diverged configs. This package brings together:
 - [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/main/packages/eslint-config-react-app)
 - [@typescript-eslint/parser](https://typescript-eslint.io/docs/linting/)
 - [eslint-plugin-prettier](https://github.com/prettier/eslint-config-prettier) 

to reduces package.json clutter from
```
    "@typescript-eslint/eslint-plugin": "^5",
    "@typescript-eslint/parser": "^5",
    "babel-eslint": "^10.1.0",
    "eslint": "^7.12.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-config-react-app": "^6.0.0",
    "eslint-plugin-flowtype": "^5.2.0",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "prettier": "^2.6.2",
    "typescript": "^4.6.4"
```
to
```
    "@fieryeagle/eslint-config-react": "^0.0.5",
    "@rushstack/eslint-patch": "^1.1.3",
```
and simplifies config down to few lines of code ([example](#usage)). This is possible thanks to the workaround provided by [@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)
```
This patch is a workaround for a longstanding ESLint feature request that would allow a shared ESLint config to bring along its own plugins, rather than imposing peer dependencies on every consumer of the config. In a monorepo scenario, this enables your lint setup to be consolidated in a single NPM package. Doing so greatly reduces the copy+pasting and version management for all the other projects that use your standard lint rule set, but don't want to be bothered with the details.
```

## Usage

- add packages `yarn add -D @fieryeagle/eslint-config-react @rushstack/eslint-patch`
- create .eslintrc.js

```
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  extends: ['@cheshirecode/eslint-config-react'],
  parserOptions: { tsconfigRootDir: __dirname }
};
```
- create .prettier.js
```
const prettierConfig = require('@fieryeagle/eslint-config-react/.prettierrc');

module.exports = prettierConfig;const prettierConfig = require('@fieryeagle/eslint-config-react/.prettierrc.js');

module.exports = prettierConfig;
```
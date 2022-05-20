# @fieryeagle/eslint-config-react

Common eslint + prettier config for React that comes with most dependencies and a patch package to allow minimal setup in userland.

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
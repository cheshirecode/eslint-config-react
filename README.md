# @fieryeagle/eslint-config-react

Common eslint config for React.

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
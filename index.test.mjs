import tap from 'tap';
import { ESLint } from 'eslint';
import config from './index.js';

const eslint = new ESLint({
  baseConfig: config,
  useEslintrc: false
});

tap.test('eslint works on jsx', (t) => {
  ['dummy.tsx'].forEach((file) => {
    t.test(`lint ${file} in ESLint to validate all rules are correct`, async (t) => {
      const result = await eslint.lintFiles(file);
      t.same(result, []);
      t.end();
    });
  });
  t.end();
});

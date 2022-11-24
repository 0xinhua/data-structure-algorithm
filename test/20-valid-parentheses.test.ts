import isValid from './../leet/20-valid-parentheses';
import { expect, test } from 'vitest';

// 输入：s = "()"
// 输出：true

// 输入：s = "()[]{}"
// 输出：true

// 输入：s = "(]"
// 输出：false

test('isValid', () => {
  expect(isValid('()')).toEqual(true);
});
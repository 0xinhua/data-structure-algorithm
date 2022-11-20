import { expect, test } from 'vitest';
import longestSubstring from './../leet/395-longest-substring-with-at-least-k-repeating-characters';

// 输入：s = "aaabbaa" k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
test('longestSubstring', () => {
  expect(longestSubstring('aaabbbaa', 3)).toEqual(8);
});

test('longestSubstring', () => {
  expect(longestSubstring('aaabaa', 3)).toEqual(3);
});

test('longestSubstring', () => {
  expect(longestSubstring('aaabb', 3)).toEqual(3);
});

test('longestSubstring', () => {
  expect(longestSubstring('ababbc', 2)).toEqual(5);
});

test('longestSubstring', () => {
  expect(longestSubstring('abbabbcaadabb', 2)).toEqual(6);
});

test('longestSubstring', () => {
  expect(longestSubstring('a', 2)).toEqual(0);
});
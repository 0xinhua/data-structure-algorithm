import { expect, test } from 'vitest';
import strStr from './../leet/28-find-the-index-of-the-first-occurrence-in-a-string';


// 输入：haystack = "leetcode", needle = "leeto"
test('strStr', () => {
  expect(strStr("leetcode", "leeto"));
});

// 输入：haystack = "sadbutsad", needle = "sad"

test('strStr', () => {
  expect(strStr("sadbutsad", "sad"));
});
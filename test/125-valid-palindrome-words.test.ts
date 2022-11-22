import { expect, test } from 'vitest';
import isPalindrome from './../leet/125-valid-palindrome-words'

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。

let s = "A man, a plan, a canal: Panama"

test('isPalindrome', () => {
  expect(isPalindrome(s)).toEqual(true);
});

// 输入：s = "race a car"
// 输出：false
// 解释："raceacar" 不是回文串

test('isPalindrome', () => {
  expect(isPalindrome("race a car")).toEqual(false);
});

test('isPalindrome', () => {
  expect(isPalindrome(" ")).toEqual(true);
});

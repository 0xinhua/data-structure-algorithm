// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
// 给你两个字符串 haystack 和 needle ，
// 请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）
// 如果 needle 不是 haystack 的一部分，则返回  -1 。

// 输入：haystack = "sadbutsad", needle = "sad"
// 输出：0
// 解释："sad" 在下标 0 和 6 处匹配。
// 第一个匹配项的下标是 0 ，所以返回 0 。

// 输入：haystack = "leetcode", needle = "leeto"
// 输出：-1
// 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。

function strStr(haystack: string, needle: string): number {
  // 1. for cycle
  // 2. str.startWith(needle) return i else -1
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substr(i).startsWith(needle)) return i;
  };
  return -1;
};

export default strStr;

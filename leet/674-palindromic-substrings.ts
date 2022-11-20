
// https://leetcode.cn/problems/palindromic-substrings/

// 给你一个字符串 s ，请你统计并返回这个字符串中 回文子串 的数目。

// 回文字符串 是正着读和倒过来读一样的字符串。

// 子字符串 是字符串中的由连续字符组成的一个序列。

// 输入：s = "abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"

// 输入：s = "aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"


function countSubstrings(s) {
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < 2 * n - 1; ++i) {
    let l = i / 2, r = i / 2 + i % 2;
    while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
      --l;
      ++r;
      ++ans;
    }
  }
  return ans;
};

export default countSubstrings;

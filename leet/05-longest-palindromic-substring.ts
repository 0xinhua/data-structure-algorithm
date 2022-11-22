// https://leetcode.cn/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-zuo-you-zhi-z-l6e1/

// 最长回文子串
// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 输入：s = "cbbd"
// 输出："bb"

function longestPalindrome(s: string): string {

  function getPalindromeStr(s: string, l: number, r: number): string {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    return s.substr(l + 1, r - l - 1);
  }

  let res = '';

  for (let i = 0; i < s.length; i++) {
    const s1 = getPalindromeStr(s, i, i);
    const s2 = getPalindromeStr(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }

  return res;

};

export default longestPalindrome;

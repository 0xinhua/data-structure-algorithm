// https://leetcode.cn/problems/valid-palindrome/description/

// 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

// 字母和数字都属于字母数字字符。

// 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

// 输入: s = "A man, a plan, a canal: Panama"
// 输出：true
// 解释："amanaplanacanalpanama" 是回文串。

// 输入：s = "race a car"
// 输出：false
// 解释："raceacar" 不是回文串。

// 输入：s = " "
// 输出：true
// 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
// 由于空字符串正着反着读都一样，所以是回文串。

// 思路1：
// 将所有大写字面转换成小写
// 移除特殊字符串空格
// amama aaaa for 循环比较首尾或折中对比
// 时间复杂度O(n)，空间复杂度O(1)

// 思路2：
// 用reverse()颠倒元素顺序，再用join()将其转换成字符串于原字符串进行对比

const isPalindrome = function (s) {
  if (s === " ") return true;
  s = s.replaceAll(/[^a-zA-Z0-9]/g, "").replaceAll(/\s/g, '').toLowerCase();
  let l = 0; let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false
    l++;
    r--;
  }
  return true;
};

export default isPalindrome;

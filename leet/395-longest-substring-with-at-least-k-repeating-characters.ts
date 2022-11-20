// https://leetcode.cn/problems/longest-substring-with-at-least-k-repeating-characters/
// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。

// 输入：s = "aaabb", k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

// 输入：s = "aaabbaa" k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。

// 所谓合法子串，即每个字串中的字符出现次数都不少于 k

// function longestSubstring(s: string, k: number): number {
//   const helper = (start: number, end: number): number => {
//     if (end - start + 1 < k) return 0;
//     const str = {};
//     for (let i = 0; i <= end; i++) {
//       if (str[s[i]] === undefined) {
//         str[s[i]] = 1;
//       } else {
//         str[s[i]]++;
//       };
//     }
//     while (end - start + 1 >= k && str[s[start]] < k) {
//       start++;
//     };
//     while (end - start + 1 >= k && str[s[end]] < k) {
//       end--;
//     };
//     if (end - start + 1 < k) {
//       return 0;
//     };
//     for (let i = start; i <= end; i++) {
//       if (str[s[i]] < k) {
//         return Math.max(helper(start, i - 1), helper(i + 1, end));
//       };
//       return end - start + 1;
//     };
//   };
//   return helper(0, s.length - 1);
// };

// export default longestSubstring;

// 思路
// 时间复杂度、空间复杂度无要求
// 临界条件 s.length < k return 0
// 思路1: 找出所有符合要求字串 输出length最长的，这种能实现但不可取
// 思路2: 找到出现次数不足k次的单词，记录下标，将其分割为多个数组，再去判断
// 1. 如果

function longestSubstring(s: string, k: number): number {

  if (s.length < k) return 0;

  // 获取所有字符及出现次数，找出不符合的字符
  function getCharCounter(s, k) {
    const obj = {};
    const arr: string[] = [];
    for (const char of s) {
      if (char in obj) {
        obj[char] = ++obj[char];
      } else {
        obj[char] = 1;
      };
    }
    for (const key in obj) {
      if (obj[key] < k) {
        arr.push(key);
      };
    }
    return arr;
  }
  const unMatchArr = getCharCounter(s, k);

  // 在这部分字符中截取，递归执行
  if (unMatchArr.length > 0) {
    let counter = 0;
    for (let i = 0; i < unMatchArr.length; i++) {
      const strList = s.split(unMatchArr[i]).filter(i => i);
      for (let j = 0; j < strList.length; j++) {
        counter = Math.max(counter, longestSubstring(strList[j], k));
      }
      return counter;
    };
  }
  // 没截取到说明已经是符合要求的字串
  return s.length;
};

export default longestSubstring;

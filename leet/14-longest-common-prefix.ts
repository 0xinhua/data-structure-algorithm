// https://leetcode.cn/problems/longest-common-prefix/
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  // strs.length == 0 return ''
  // temp = atrs[0]
  // for cycle
  // if temp[j] === atrs[i][j] break
  // substr(0, j)
  // return temp
  if (strs.length === 0) return '';
  let temp = strs[0];
  for (let i = 0; i < strs.length; i++) {
    let j = 0
    for (; j < temp.length && j < strs[i].length; j++) {
      if (temp[j] !== strs[i][j]) break;
    };
    temp = temp.substr(0, j);
  };
  return temp;
};

export default longestCommonPrefix;

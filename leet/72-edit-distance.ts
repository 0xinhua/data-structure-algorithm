// https://leetcode.cn/problems/edit-distance/
// https://leetcode.cn/problems/edit-distance/comments/

// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符


// 输入：word1 = "horse", word2 = "ros"
// 输出：3
// 解释：
// horse -> rorse (将 'h' 替换为 'r')
// rorse -> rose (删除 'r')
// rose -> ros (删除 'e')


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  let dp = Array.from(Array(word1.length + 1), () =>
    Array(word2.length + 1).fill(0)
  );
  /* base case 是i走完word1或j走完word2，可以直接返回另一个字符串剩下的长度 */
  // j走完word2 如果i还没走完word1，那么只能用删除操作把word1缩短为word2,也就是直接返回另一个字符串剩下的长度
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
  }
  // 同理  如果i走完word1时j还没走完了word2，那就只能用插入操作把word2剩下的字符全部插入word1
  for (let j = 1; j <= word2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        // 啥也不做
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // 三选一  哪个操作最后得到的编辑距离最小，就选谁
        dp[i][j] = Math.min(
          // 删除
          // 直接把word1[i]这个字符删掉，前移i继续跟j对比   操作数+1
          dp[i - 1][j] + 1,
          // 插入
          // 直接在word1[i]插入一个和word2[j]一样的字符，那么word2[j]就被匹配了，前移j继续跟i对比
          dp[i][j - 1] + 1,
          // 替换
          // 直接把word1[i]替换成word2[j] 这样它俩就匹配了，同时前移i,j继续对比
          dp[i - 1][j - 1] + 1
        );
      }
    }
  }

  return dp[word1.length][word2.length];
};

export default minDistance;

// https://leetcode.cn/problems/climbing-stairs/

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 思路：
// 枚举 -> 边界值 -> 变量 -> value
// n = 1  v = 1
// n = 2  v = 2
// n = 3  v = 3  1x3 1+2 2+1
// n = 4  v = 5  1x4 2+2 1+2+1 2+1+1 1+1+2
// n = 5  v = 8   1x5 2+2+1 1+2+1+1 1+2+2 2+1+2 2+1+1+1 1+1+2+1 1+1+1+2

function climbStairs(n: number): number {
  // if (n === 1 || n === 2) return n;
  // return climbStairs(n - 1) + climbStairs(n - 2);
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

export default climbStairs;
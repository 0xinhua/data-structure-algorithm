// https://leetcode.cn/problems/fibonacci-number/

// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：
// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

// 枚举 -> 变量 -> 值 -> 状态 -> 求解
// f0 0
// f1 1
// f2 1
// f3 2
// f4 3

function fib(n: number): number {
  let fb = [0, 1];
  for (let i = 2; i <= n; i++) {
    fb[i] = fb[i - 1] + fb[i - 2];
  };
  return fb[n];
};

export default fib;

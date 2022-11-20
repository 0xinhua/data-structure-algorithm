// https://leetcode.cn/problems/minimum-moves-to-convert-string/
// https://leetcode.cn/problems/minimum-moves-to-convert-string/solution/by-100000000000001-i674/

// 2027. 转换字符串的最少操作次数

// 给你一个字符串 s ，由 n 个字符组成，每个字符不是 'X' 就是 'O' 。

// 一次 操作 定义为从 s 中选出 三个连续字符 并将选中的每个字符都转换为 'O' 。注意，如果字符已经是 'O' ，只需要保持 不变 。

// 返回将 s 中所有字符均转换为 'O' 需要执行的 最少 操作次数。

// 输入：s = "XXX"
// 输出：1
// 解释：XXX -> OOO
// 一次操作，选中全部 3 个字符，并将它们转换为 'O' 。

// 输入：s = "XXOX"
// 输出：2
// 解释：XXOX -> OOOX -> OOOO
// 第一次操作，选择前 3 个字符，并将这些字符转换为 'O' 。
// 然后，选中后 3 个字符，并执行转换。最终得到的字符串全由字符 'O' 组成。


export const minimumMoves = (s: string): number => {
  let c = 0, i = 0
  while (i < s.length) s[i] === 'X' ? (i += 3, c++) : i++
  return c
};

/**
 * @param {string} s
 * @return {number}
 */

export const minimumMovesFun = function (s) {
  let t = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'X') {
      i += 2
      t++
    }
  }
  return t
};

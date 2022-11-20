// https://leetcode.cn/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/description/
// 剑指 Offer 04. 二维数组中的查找
// 在一个 n * m 的二维数组中，每一行都按照从左到右 非递减 的顺序排序，每一列都按照从上到下 非递减 的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。


const findNumberIn2DArray = (matrix: number[][], target: number): boolean => {
  // 临界条件 [[]]
  if (matrix.length <= 0) return false;
  // row 行 为0，列 column 最大值 定位到右上角值
  // [row][column] === target return true
  // < target row++
  // > target column --
  let row = 0;
  let column = matrix[0].length;
  while (row < matrix.length && column >= 0) {
    const val = matrix[row][column];
    if (val === target) return true;
    if (val < target) {
      row++;
    } else {
      column--
    };
  };
  return false;
}

export default findNumberIn2DArray;

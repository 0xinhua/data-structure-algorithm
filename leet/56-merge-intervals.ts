// https://leetcode.cn/problems/merge-intervals/
// 56. 合并区间

// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6]

// 输入：intervals = [[1,4],[4,5]]
// 输出：[[1,5]]
// 解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

function merge(intervals: number[][]): number[][] {
  // sort
  // for 循环对比 arr[i][0] < arr[i-1][1]
  // [arr[i-1][0], arr[i][1]]
  // if not push arr[i]
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length;) {
    if (intervals[i][0] <= intervals[i - 1][1]) {
      intervals[i - 1] = [intervals[i - 1][0], Math.max(intervals[i - 1][1], intervals[i][1])];
      intervals.splice(i, 1);
    } else {
      i++;
    };
  }
  return intervals;
};

export default merge;

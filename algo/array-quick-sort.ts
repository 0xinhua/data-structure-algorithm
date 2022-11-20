// 写一个数组的快排
// data = [6,1,3,9,10,12,1,3,5];
// output [1,1,3,3,5,6,9,10,12];
// 找到一个中点值，大于它放右边，小于放左边
// 左 + 中间值 + 右

const arrayQuickSort = (data) => {

  if (data.length <= 0) return data;
  const midIndex = Math.floor(data.length / 2)
  const mid = data.splice(midIndex, 1)[0];
  let left: number[] = [];
  let right: number[] = [];
  for (let i = 0; i < data.length; i++) {
    const num = data[i];
    if (num > mid) {
      right.push(num);
    } else {
      left.push(num);
    }
  }
  return arrayQuickSort(left).concat(mid, arrayQuickSort(right));
}

export default arrayQuickSort;

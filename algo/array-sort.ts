// 快排，类似于归并
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let left = [],
    right = [];
  // 中点值
  const midIndex = Math.floor(arr.length / 2);
  const mid = arr.splice(midIndex, 1)[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < mid) {
      left.push(arr[i]);
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(mid, quickSort(right))
}

// 冒泡

function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1]
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
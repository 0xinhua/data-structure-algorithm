function searchRange(nums: number[], target: number): number[] {
  // 排序
  // O(logn)
  // 临界条件
  // [5,7,7,8,8,10]
  //  i    k     j

  // 临界值 length = 0 [-1, -1]
  // firstPosition 如果第一个位置都没有的话 return [-1, -1]
  // lastPossition true return [firstPosition, lastPossition]
  // [5,7,7,8,8,10,18]  10
  const length = nums.length;
  if (length === 0) return [-1, -1];
  const getFirstPosition = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] == target) {
        right = mid;
      } else {
        right = mid - 1;
      }
    }
    console.log(nums[left]);
    return (nums[left] === target) ? left : -1;
  };
  const getLastPossition = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = Math.floor((left + right + 1) / 2)
      if (nums[mid] < target) {
        left = mid + 1;
      } else if (nums[mid] == target) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    return (nums[left] === target) ? left : -1;
  };
  const firstPosition = getFirstPosition(nums, target);
  if (firstPosition != -1) {
    const lastPossition = getLastPossition(nums, target);
    return [firstPosition, lastPossition];
  } else {
    return [-1, -1];
  }

};

export default searchRange;
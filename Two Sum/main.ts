function twoSum(nums: number[], target: number) {
  const acc: Record<string, number[]> = {};

  nums.forEach((num, index) => {
    if (num in acc) acc[num].push(index);
    else acc[num] = [index];
  });

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const key = String(target - num);
    if (key in acc) {
      const value = acc[key];
      if (num === target - num && value.length !== 2) {
        continue;
      }
      const elementIndex = value.length === 2 ? 1 : 0;
      return [i, value[elementIndex]];
    }
  }
}
console.log(twoSum([-1, -2, -3, -4, -5], -8));

// 97.5% - 6.81%

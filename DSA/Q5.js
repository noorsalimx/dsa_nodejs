let nums = [2, 7, 11, 15],
  target = 13;

const length = nums.length - 1;
const map = new Map();

for (let i = 0; i <= length; i++) {
  if (map.has(nums[i])) {
    console.log([nums[map.get(nums[i])], nums[i]]);
    return [nums[map.get(nums[i])], nums[i]];
  }
  map.set(target - nums[i], i);
  console.log(map);
}

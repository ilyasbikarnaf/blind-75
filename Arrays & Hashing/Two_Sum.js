class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const resMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (resMap.has(diff)) {
        return [i, resMap.get(diff)];
      }

      resMap.set(nums[i], i);
    }
    return false;
  }
}

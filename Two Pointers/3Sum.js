class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    if (nums.length < 3) return false;

    nums.sort((a, b) => a - b);
    const res = [];

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) break;
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      let l = i + 1;
      let r = nums.length - 1;

      while (l < r) {
        const total = nums[i] + nums[l] + nums[r];

        if (total > 0) {
          r--;
        } else if (total < 0) {
          l++;
        } else {
          res.push([nums[i], nums[l], nums[r]]);

          l++;
          r--;

          while (l < r && nums[l] === nums[l - 1]) {
            l++;
          }
        }
      }
    }

    return res;
  }
}

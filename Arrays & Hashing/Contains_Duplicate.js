class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const numsSet = new Set(nums);

    return numsSet.size !== nums.length;
  }
}

//2nd solution
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const numsSet = new Set();
    for (const num of nums) {
      if (numsSet.has(num)) return true;
      else {
        numsSet.add(num);
      }
    }
    return false;
  }
}

// 3rd solution
class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const obj = {};

    for (const num of nums) {
      if (obj[num]) return true;
      else {
        obj[num] = 1;
      }
    }
    return false;
  }
}

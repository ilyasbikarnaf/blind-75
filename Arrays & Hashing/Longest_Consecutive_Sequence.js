class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    const numsSet = new Set(nums);
    let res = 0;

    for (let num of numsSet) {
      if (numsSet.has(num - 1)) continue;
      let length = 0;

      if (!numsSet.has(num - 1)) {
        while (numsSet.has(num + length)) {
          length++;
        }
      }

      res = Math.max(res, length);
    }
    return res;
  }
}

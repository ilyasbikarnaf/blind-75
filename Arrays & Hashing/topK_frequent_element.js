class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const count = {};
    const freq = Array.from({ length: nums.length + 1 }, () => []);

    for (const n of nums) {
      count[n] = (count[n] || 0) + 1;
    }

    for (const n in count) {
      freq[count[n]].push(n);
    }

    const res = [];
    for (let i = freq.length - 1; i >= 0; i--) {
      for (let num of freq[i]) {
        console.log(freq[i]);
        res.push(num);
        if (res.length === k) return res;
      }
    }

    return res;
  }
}

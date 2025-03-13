class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const res = {};

    for (let str of strs) {
      const count = Array(26).fill(0);
      for (let char of str) {
        const index = char.charCodeAt() - "a".charCodeAt();
        count[index] += 1;
      }
      let key = count.join(",");
      if (!res[key]) res[key] = [];
      res[key].push(str);
    }
    return Object.values(res);
  }
}

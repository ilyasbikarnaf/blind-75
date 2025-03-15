class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = "";
    for (let str of strs) {
      res += `${str.length}#${str}`;
    }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];

    let i = 0;

    while (i < str.length) {
      let j = i;
      while (str[j] !== "#") {
        j++;
      }

      const strLength = parseInt(str.slice(i, j));
      i = j + 1;
      j = i + strLength;
      res.push(str.slice(i, j));
      i = j;
    }

    return res;
  }
}

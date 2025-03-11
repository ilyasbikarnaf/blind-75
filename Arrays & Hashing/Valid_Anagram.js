/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    count[t[i].charCodeAt(0) - "a".charCodeAt(0)]--;
  }

  return count.every((val) => val === 0);
};

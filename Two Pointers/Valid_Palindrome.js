class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0
        let r = s.length - 1

        while (l < r) {
            while (l < r && !this.alphaNumeric(s[l]) ){ 
                l++
            }
            while (l < r && !this.alphaNumeric(s[r]) ){ 
                r--
            }

            if (s[l].toLowerCase() !== s[r].toLocaleLowerCase()) {
                return false
            }
            r--
            l++

        }
        return true
    }


     alphaNumeric(c) {
        return (
            (c >= 'A' && c <= 'Z') || (c >='a' && c <='z')|| (c >= '0' && c <= '9')
        )

    }
}

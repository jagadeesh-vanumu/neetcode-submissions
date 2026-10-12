class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // approach 1
        // 2 objects
        // check if objects equality direct-- iterate key value compare
        if (s.length !== t.length) return false


        const obj1 = {};
        const obj2 = {};
        for (let i=0; i<s.length; i++) {
            if (obj1[s[i]]) obj1[s[i]] = obj1[s[i]] + 1
            else obj1[s[i]]=1
        }
         for (let i=0; i<t.length; i++) {
            if (obj2[t[i]]) obj2[t[i]] = obj2[t[i]] + 1
            else obj2[t[i]]=1
        }
        for (let [key] of Object.entries(obj1)) {
            if (obj1[key] !== obj2[key]) return false
        }
        return true
    }
}

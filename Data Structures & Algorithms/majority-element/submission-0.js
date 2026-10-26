class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        for (let i of nums) {
            map.set(i, (map.get(i) || 0)+1)
        }
        for (let [key,value] of map) {
            if (value>(nums.length)/2) return key
        }
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nums_set = new Set(nums);
        return nums.length - nums_set.size !==0
        
    }
}

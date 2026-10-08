class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = new Map();
        for (let i=0; i<nums.length; i++) {
            obj.set(nums[i], i)
        }
  
        for (let i=0; i<nums.length; i++) {
            if (obj.get(target-nums[i]) !== i && obj.get(target-nums[i]) !== undefined) return [i, obj.get(target-nums[i])]
        }
    }
}

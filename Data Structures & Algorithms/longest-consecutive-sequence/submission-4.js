class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length===0) return 0
        nums.sort((a,b) => a-b);
        let max = 1;
        let current = 1

        for (let i=1; i<nums.length; i++) {
                if ((nums[i]- nums[i-1])===1) current+=1
                else if (nums[i]=== nums[i-1]) continue
                else current=1
                max = Math.max(max, current)
        }
        return max

    }
}

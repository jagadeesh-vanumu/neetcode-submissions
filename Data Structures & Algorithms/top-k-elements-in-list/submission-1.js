class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for (let i of nums) {
            map.set(i, (map.get(i)+1) || 1)
        }
        const arr = [];
        for (let [key, value] of map) {
            arr.push([key, value])
        }
    
        arr.sort((a,b) => a[1]-b[1])
        const res=[]
        for (let i=0; i<k; i++) {
            res.push(arr[arr.length-i-1][0])
        }
        return res


    }
}

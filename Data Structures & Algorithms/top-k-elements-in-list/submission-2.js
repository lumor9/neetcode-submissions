class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        const arr = Array.from({length: nums.length}, () => []);

        for (const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        const entries = map.entries();
        for (const entry of entries){
            arr[entry[1]-1].push(entry[0]);
        }

        const res = []
        for (let i=arr.length-1; i>=0; i--){
            for (let num of arr[i]){
                res.push(num);
                if (res.length === k) return res;
            }
        }

    }
}

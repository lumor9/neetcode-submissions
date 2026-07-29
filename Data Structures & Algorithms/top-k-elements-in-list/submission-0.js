class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums){
            map.set(num, (map.get(num) || 0) + 1)
        }

        const arr = new Array(nums.length);

        const entries = map.entries();
        for (const entry of entries){
            const ind = entry[1]-1;
            if (!arr[ind]) arr[ind] = [];
            arr[ind].push(entry[0]);
        }

        const res = []
        for (let i=arr.length-1; i>=0; i--){
            if (arr[i]) {
                if (arr[i].length <= (k-res.length)){
                    res.push(...arr[i]);
                }
                else{
                    res.concat(arr[i].slice(0, 0+(k-res.length)));
                    return res
                }
            }
        }

        return res;

    }
}

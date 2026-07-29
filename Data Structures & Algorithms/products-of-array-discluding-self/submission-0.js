class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const arr = Array.from({length: nums.length}, ()=>new Array(2));
        let i = 0, j = nums.length-1;
        arr[0][0] = 1;
        arr[arr.length-1][1] = 1;

        while (i < nums.length-1 && j >= 1){
            arr[i+1][0] = arr[i][0] * nums[i];
            arr[j-1][1] = arr[j][1] * nums[j];
            i++;
            j--;
        }

        return arr.map((elem) => elem[0] * elem[1]);
    }
}

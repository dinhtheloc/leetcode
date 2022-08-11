// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const hashMap = {};
    let max = 0
    for (let i =0 ; i < nums.length; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1;
        } else {
            hashMap[nums[i]]++;
        }
        if (hashMap[nums[i]] > max && hashMap[nums[i]] >= nums.length/2) 
            return nums[i]
    }
};
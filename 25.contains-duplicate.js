// https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const hashMap = {
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (!hashMap[nums[i]]) {
            hashMap[nums[i]] = 1;
        } else {
            return true
        }
    }
    
    return false
};
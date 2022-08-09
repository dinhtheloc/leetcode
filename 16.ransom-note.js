// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true
 

// Constraints:

// 1 <= ransomNote.length, magazine.length <= 105
// ransomNote and magazine consist of lowercase English letters.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const hashMap = {};
    for (let i = 0; i < magazine.length; i++) {
        if(!hashMap[magazine[i]]) {
            hashMap[magazine[i]] = 1;
        } else {
            hashMap[magazine[i]]++;
        }
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if(!hashMap[ransomNote[i]]) {
            return false
        } else {
            hashMap[ransomNote[i]]--;
        }
    }
    
    
    return true;
};
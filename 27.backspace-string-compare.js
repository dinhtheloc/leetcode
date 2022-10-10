/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  if (helper(s) === helper(t)) {
    return true;
  } else {
    return false;
  }
};

function helper(s) {
  let string = "";
  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);
    if (element === "#" && element.length > 0) {
      string = string.slice(0, string.length - 1);
    } else {
      string += element;
    }
  }
  return string;
}

// https://leetcode.com/problems/backspace-string-compare/
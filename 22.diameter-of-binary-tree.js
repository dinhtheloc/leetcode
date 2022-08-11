// https://leetcode.com/problems/diameter-of-binary-tree/submissions/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function dfs(node) {
  if (node === null) {
    return 0;
  }
  var left = dfs(node.left);
  var right = dfs(node.right);

  max = Math.max(max, left + right);
  return Math.max(left, right) + 1;
}

var diameterOfBinaryTree = function (root) {
  max = 0;
  dfs(root);
  return max;
};

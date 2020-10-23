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
 * @return {number[]}
 * BFS approach
 */
const rightSideView = (root) => {
    
    if(!root) return [];
    const queue = [root];
    const result = [];
    while(queue.length) {
        let currentSize = queue.length;
        for(let i = 0; i < currentSize; i++) {
            let shifted = queue.shift();
            if(i === currentSize-1) {
                result.push(shifted.val)
            }
            if(shifted.left) queue.push(shifted.left)
            if(shifted.right) queue.push(shifted.right)
        }
    }
    return result;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 * DFS preorder approach
 */
var rightSideView = function(root) {
    if(!root) return [];
    const result = [];
    
    const preOrder = (root, depth=0) => {
        
        result[depth] = root.val;
        if(root.left) preOrder(root.left, depth+1);
        if(root.right) preOrder(root.right, depth+1);
    }
    preOrder(root)
    return result;
};
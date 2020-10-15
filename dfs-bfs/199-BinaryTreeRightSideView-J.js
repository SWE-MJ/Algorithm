
/*
    Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
*/

//BFS  TC:O(N)  SC:O(H)
var rightSideView = function(root) {
    if(!root) return []
    const res = []
    const queue = [root]
    let len = 0
    while(queue.length) {
        len = queue.length
        let lastNodeVal = 0
        for(let i=0;i<len;i++) {
            const node = queue.pop()
            
            lastNodeVal = node.val
            if(node.left)
                queue.unshift(node.left)
            if(node.right)
                queue.unshift(node.right)
            
        }
        res.push(lastNodeVal)
    }
    
    return res
};

//DFS TC:O(N)  SC:O(H)
var rightSideView = function(root) {
    let res = []
    
    const dps = (root, depth) => {
        if(!root) return;
        
        res[depth] = root.val
        console.log(res)
        dps(root.left, depth+1)
        dps(root.right, depth+1)
        return;
    }
    
    dps(root, 0)
    
    return res
};

//Iterative TC:O(N)  SC:O(H)
var rightSideView = function(root) {
    
    if(!root) return []
    
    let depth = 0
    const res = []
    const queue = [root]
    const depths = [0]
    
    
    while(queue.length) {
        const node = queue.pop()
        const depth = depths.pop()
        
        if(node) {
            res[depth] = node.val
            
            queue.push(node.right)
            queue.push(node.left)
            depths.push(depth+1)
            depths.push(depth+1)
        }
    }
    
    return res
};
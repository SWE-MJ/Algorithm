//Input: [Integers] only pos, dup, array of n size
//Output: integer return # of moves
//each moves increment two elements

var minMoves = function(nums) {    
    nums.sort()
    let moves = 0 
    for(let i=1;i<nums.length;i++) {
        let diff = moves + nums[i] - nums[i-1]
        nums[i] += moves
        moves += diff
    }
    
    return moves
};
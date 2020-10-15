/* 
    Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
*/

//Input: [[integers]] m x n matrix: integer>pos
//Output: Integer(return min path from top lef tto bottom right)

//TC: O(mn)  SC:O(1)
var minPathSum = function(grid) {    
    if(!grid.length)
        return 0
    
    let colLength = grid.length-1
    let rowLength = grid[0].length-1
    
    for(let col=0;col<=colLength;col++) {
        for(let row=0;row<=rowLength;row++) {
            let left = row-1<0 ? Infinity : grid[col][row-1]
            let top = col-1<0 ? Infinity : grid[col-1][row]
            
            if(left === Infinity && top === Infinity) {
                left = 0
                top = 0
            }
            
            grid[col][row] += Math.min(left,top)
        }
    }
    3
    return grid[colLength][rowLength]
};
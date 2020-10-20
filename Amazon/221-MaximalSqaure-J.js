
//DP approach
//TC: O(MxN) SC:O(MxN)
var maximalSquare = function(matrix) {
    //Input:[[integers]](matrix)
    //Output: Integer(return its area)
    
    //Key: create all 0 2d array with +1 width and length, if(diagonal is 1) then save dp with min among left, top, diagonal and increment

    
    //created 2d array all 0
    //if digonal is 1 then find get min among top,left,diagonal, and increament by 1
    //calculate max between each dp
    //return max * max
    
    if(!matrix.length || !matrix[0].length) 
        return 0;
    
    let max = 0
    const dp = new Array(matrix.length+1).fill(0).map(() => new Array(matrix[0].length+1).fill(0))
    
    for(let col=1;col<dp.length;col++) {
        for(let row=1;row<dp[0].length;row++) {
            if(matrix[col-1][row-1] === '1') {
                dp[col][row] = Math.min(Math.min(dp[col][row-1], dp[col-1][row]), dp[col-1][row-1]) + 1
                max = Math.max(max, dp[col][row])
            }
            
        }
    }
    
    return max * max 
};
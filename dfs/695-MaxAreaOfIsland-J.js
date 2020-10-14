/*
Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
*/

//Input: [[integer]] grid(2x2 matrix), cosists of only 1(island) and 0(water)
//Output: integer(return max area of island)
//Assumption: surrounded area considered as 0, if no island return 0

//TC: O(N)    SC:O(N)
var maxAreaOfIsland = function(grid) {
    let globalMax = 0
    let max = 0
    
    const dfs = (grid, col, row) => {
        if(col<0 || row<0 || col>grid.length-1 || row>grid[0].length-1 || grid[col][row] === 0)
            return;
        
        grid[col][row] = 0
        max += 1
        globalMax = Math.max(max, globalMax)
        dfs(grid, col+1, row)
        dfs(grid, col, row+1)
        dfs(grid, col-1, row)
        dfs(grid, col, row-1)
    
    }
    
    for(let i=0;i<grid.length;i++) {
        for(let j=0;j<grid[0].length;j++) {
            if(grid[i][j] === 1) {
                dfs(grid, i, j)
                max = 0
            }
        }
    }
    
    return globalMax
};
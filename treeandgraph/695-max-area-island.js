var maxAreaOfIsland = function(grid) {
    let max = -Infinity;
    let currArea = 0;

    let checkNumIsland = (grid, i, j) => {
        if(i < 0 || j < 0) return;
        if(i >= grid.length || j >= grid[i].length || grid[i][j] === 0) return;
        
        currArea += grid[i][j];
        max = Math.max(max, currArea);
        grid[i][j] = 0;

        checkNumIsland(grid, i+1 ,j);
        checkNumIsland(grid, i-1, j);
        checkNumIsland(grid, i, j+1);
        checkNumIsland(grid, i, j-1);
        
    }    
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
                if(grid[i][j] === 1) {   
                    checkNumIsland(grid, i, j);
                    currArea = 0;
                }
        }
    }
    return max === -Infinity ? 0 : max;
};

//console.log(maxAreaOfIsland([[1,1],[1,0]]));
console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));
/**
 * [
 * [1,1]
 * [1,0]
 * ]
 */
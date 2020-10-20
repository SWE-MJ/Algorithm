
//TC: O(MxN)  SC:O(MxN)
var numIslands = function(grid) {
    //Input: [[strings]](grid)
    //Output: Integer(return Number of Islands) - isalnd: surronded by water(0), four edges are (0)
    
    //Key Point: mark visitied node to 0, move left,top,right,bottom 
    
    const colLength = grid.length
    const rowLength = grid[0].length
    let NumberOfIslands = 0
    
    //starting from 0 index using two for loops
    //if position is island, call dps
    for(let col=0;col<colLength;col++) {
        for(let row=0;row<rowLength;row++) {
            if(grid[col][row] === "1") {
                dps(grid, col, row)
                NumberOfIslands++
            }
        }
    }
    
    return NumberOfIslands
};

//dps function
//check if visited node is 1, if not return;  if you face edges return;
//mark visited node to water, so it does not visit again
//increment Number Of Islands 
//visit left (col,row-1)
//visit top (col-1,row)
//visit right (col,row+1)
//visit bottom (col+1, row)
const dps = (grid, col, row) => {
    if(col < 0 || row < 0 || col >= grid.length || row >= grid[0].length || grid[col][row] !== "1" )
        return;
    
    grid[col][row] = "0"
    
    dps(grid, col, row-1)
    dps(grid, col-1, row)
    dps(grid, col, row+1)
    dps(grid, col+1, row)
    
    return;
}


var numIslands = function(grid) {
    //Input: [[strings]](grid)
    //Output: Integer(return Number of Islands) - isalnd: surronded by water(0), four edges are (0)
    
    //Key Point: mark visitied node to 0, explore each nodes using bfs
    //BFS: exploring each children completely before going into next branch
    
    //Strategy
    //starting from 0 index using two for loops
    //if position is island, call bfs
        //put first grid location as queue
    
    //BFS
    //Iterate through while loop until queue does not exist
    //pop the last queue
    //counter number of islands
    //mark visited island to water
    //check left if row >= 0 && left is island, insert into queue
    //check top if col >=0 && top is island, insert into queue
    //chcck right if row < grid[0].length, insert into queue
    //check bottom if col <grid.length, isnert into queue

    if(!grid.length === 0 || !grid[0].length)
        return 0
    
    const queue = []
    let NumberOfIslands = 0
    
    for(let col=0;col<grid.length;col++) {
        for(let row=0;row<grid[0].length;row++) {
            if(grid[col][row] === "1") {
                NumberOfIslands++
                grid[col][row] = "0"
                queue.push([col, row])
                while(queue.length) {
                    let [c,r] = queue.pop()
                    
                    if(r-1>=0 && grid[c][r-1] === "1") {
                        queue.push([c,r-1])
                        grid[c][r-1] = "0"
                    }
                    if(r+1<grid[0].length && grid[c][r+1] === "1") {
                        queue.push([c,r+1])
                        grid[c][r+1] = "0"
                    }
                    if(c-1>=0 && grid[c-1][r] === "1") {
                        queue.push([c-1,r])
                        grid[c-1][r] = "0"
                    }
                    if(c+1<grid.length && grid[c+1][r] === "1") {
                        queue.push([c+1,r])
                        grid[c+1][r] = "0"
                    }
                }
            }
        }
    }

    return NumberOfIslands
};
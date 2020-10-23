function minMoves(maze, x, y) {
    // Write your code here
    let min = Infinity;

    let coinCount = 0;
    for(let i = 0; i < maze.length; i++) {
        for(let j = 0; j < maze[0].length; j++) {
            if(maze[i][j] === 2) coinCount++;
        }
    }

    const findMinMove = (maze, i, j, currentMinPath = 0) => {

        if(i < 0 || j < 0 || i >= maze.length || j >= maze[0].length || maze[i][j] === 1 ) {    
            return;
        }
        if(maze[i][j] === 2) coinCount--;
        if(i === x && j === y && coinCount !== 0) {
            return;
        }
        if(i === x && j === y && coinCount === 0) {

            min = Math.min(min, currentMinPath);
            return; 
        }
        let temp = maze[i][j];
        maze[i][j] = 1;

        findMinMove(maze, i+1, j, currentMinPath + 1);
        findMinMove(maze, i, j+1, currentMinPath + 1);
        findMinMove(maze, i, j-1, currentMinPath + 1);
        findMinMove(maze, i-1, j, currentMinPath + 1);

        maze[i][j] = temp;
    }

    findMinMove(maze, 0, 0);    
    console.log(min);
    return min = Infinity ? -1 : min;


}

console.log(minMoves([[0,2,0],[0,0,1],[1,1,1]], 1,1)); // 2
console.log(minMoves([[0,1,0],[1,0,1],[0,2,2]], 1,1));
console.log(minMoves([[0,2,0],[1,1,2],[1,0,0]], 2,1));
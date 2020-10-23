//TC: O(N)  SC:O(1)
const cutOffRank = (cuttOffRank, num, scores) => {
    if(!scores.legnth) return 0

    const countArr = new Array(101).fill(0)
    let rank = 1
    for (let score of scores) {
        countArr[score] = countArr[score] ? countArr[score] + 1 : 1
    }

    for(let i=count.length-1;i>=0;i--) {
        if(countArr[i] !== 0) {
            let counts = countARr[i]
            countArr[i] = rank
            rank += counts
        }
    }

    let numPlayers = 0
    for(let score of scores) {
        if(count[s] <= cutOffRank)
            numPlayers++
    }

    return numPlayers
}

cuttOffRank(3, 4, [100,50,50,25])
cuttOffRank(4, 5, [2,2,3,4,5])
//TC: O(N)  SC:O(N)
const getSongPairCount = (songs) => {
    let ans = 0
    const map = {}

    for(let i=0;i<songs.length;i++) {
        const mod = songs[i] % 60
        const left = (60 - mod) % 60 //need it for 60/60 case
        ans += map[left] ? map[left] : 0
        map[mod] = map[mod] ? map[mod] + 1 : 1
    }

    return  ans
}

const test = (input,output) => {
    console.log(getSongPairCount(input) === output)
}

test([37,23,60],1)
test([10,50,90,30],2)
test([30,20,150,100,40],3)
test([60,60,60],3)
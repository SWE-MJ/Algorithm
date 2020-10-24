const amazonMusicPairs = (songs) => {
    if(!songs.length)
        return 0

    let map = {}
    let ans = 0

    for(let song of songs) {
        song %= 60
        ans += map[(60-song)%60] ? map[(60-song)%60] : 0
        map[song] = map[song] ? map[song] + 1 : 1
    }

    return ans
}
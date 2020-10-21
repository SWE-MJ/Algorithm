
//TC: O(N)  SC: O(N)
const substringKDistinctChars = (str, k) => {
  if(!String.length) 
    return []

    const res = []

    for(let i=0;i+k<=str.length;i++) {
        const subStr = str.substring(i, i+k)
        const set = new Set(subStr)

        if(subStr.length-1 === set.size)
            res.push(subStr)
    }

    return res
}
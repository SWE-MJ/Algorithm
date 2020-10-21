
//TC: O(N^2) SC: O(M)
const transactionLogs = (array, threshold) => {
    if(!array.length)
      return []
  
    const map = {}
    const res = []
  
    for(let i=0;i<array.length;i++) {
      let logs = array[i][0].split(' ')
      if(logs[0] !== logs[1]) {
        map[logs[0]] = map[logs[0]] ? map[logs[0]] + 1 : 1
      } 
         
      map[logs[1]] = map[logs[1]] ? map[logs[1]] + 1 : 1
    }
  
    for(let item in map) {
      if(map[item] >= threshold)
        res.push(item)
    }
  
    res.sort((a,b) => { return b-a })
    return res
  }
  
  
  transactionLogs(
  [
  ["345366 89921 45"],
  ["029323 38239 23"],
  ["38239 345366 15"],
  ["029323 38239 77"],
  ["345366 38239 23"],
  ["029323 345366 13"],
  ["38239 38239 23"]
  ], 3
  )
  
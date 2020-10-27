const fillTheTruck = (num, boxes, unitSize, unitsPerBox, truckSize) => {
    let map = {}
  
    for(let i=0;i<unitSize;i++) {
      map[boxes[i]] = unitsPerBox[i]
    }
  
    let keys = Object.keys(map).sort((a,b) =>{ return b-a })
    
    let max = 0
    for(let key of keys) {
      if(truckSize > 0) {
        if(truckSize >= map[key]) {
          max += key * map[key]
          truckSize -= map[key]
        }
        else {
          max += key * truckSize
          truckSize = 0
        }
      }
    }
  
    return max
  }
  
  fillTheTruck(3,[1,2,3],3,[3,3,1],3) //7
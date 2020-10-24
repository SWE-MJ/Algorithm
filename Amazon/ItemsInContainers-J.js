
//* compartments
//| open,close
//determine the number of items in closed compartments within the substring between the two indices, inclusive.

/*
      0 1 2 3 4 5 6 7 8 9
      * * | * * * | * * *
left -1-1 2 2 2 2 6 6 6 6
right 2 2 2 6 6 6 6-1-1-1
star  1 2 2 3 4 5 5 6 7 8
*/

//TC: O(N)  SC: O(N)
const itemsInCotnainers = (s, startIndicies, endIndicies) => {
    let res = []
    let left = []
    let right = []
    let star = []
  
    let barIndex = -1
    for(let i=0;i<s.length;i++) {
      if(s[i] === '|') {
        barIndex = i
      }
  
      left[i] = barIndex
    }
  
    barIndex = -1
    for(let i=s.length-1;i>=0;i--) {
      if(s[i] === '|') {
        barIndex = i
      }
  
      right[i] = barIndex
    }
  
    let count=0
    for(let i=0;i<s.length;i++) {
      if(s[i] === '*') {
        count++
      }
      star[i] = count
    }
  
    for(let i=0;i<startIndicies.length;i++) {
      let start = startIndicies[i]-1
      let end = endIndicies[i]-1
      let a = right[start]
      let b = left[end]
      if(a >= b) res[i] = 0
      else res[i] = star[b] - star[a]
    }
    
    return res
  }

  
  //itemsInCotnainers('|**|*|*', [1,1],[5,6])
  //itemsInCotnainers('*|*|', [1,1],[1,3])
  itemsInCotnainers('**|***|***', [1,1],[1,8])
  
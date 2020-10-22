//TC: O(N)   SC: O(1)
const itemsInContainers = (codeList, shoppingCart) => {
    if(!shoppingCart.length)
      return 0
  
    let i=0, j=0
    for(let k=0;k<shoppingCart.length;k++) {
      if(codeList[i][j] === "anything" || codeList[i][j] === shoppingCart[k]) {
        j++
        
        //Meet codeList end point => next CodeList with starting 0 index
        if(j === codeList[i].length) {
          j=0
          i++
        }

        //finish all codeList then return true
        if(i === codeList.length) {
            return 1
          }
      } else {
        //decrement k by incremented j when it values are not same
        k-=j
        j=0
      }
    }
  
    return 0
  }
  
  const test = (codeList, shoppingCart, expect) => {
    console.log(itemsInContainers(codeList, shoppingCart) === expect)
  }
  
  let codeList1 = [["apple", "apple"],["banana", "anything", "banana"]]
  let shoppingCart1 = ["orange", "apple", "apple", "banana", "orange", "banana"]
  let codeList2 = [["apple", "apple"],["banana", "anything", "banana"]]
  let shoppingCart2 = ["banana", "orange", "banana", "apple", "apple"]
  let codeList3 = [["apple", "apple"],["banana", "anything", "banana"]]
  let shoppingCart3 = ["apple", "banana", "apple", "banana", "ornage", "banana"]
  let codeList4 = [["apple", "apple"],["apple", "apple", "banana"]]
  let shoppingCart4 = ["apple", "apple", "apple", "banana"]
  let codeList5 = [["apple", "apple"],["banana", "anything", "banana"]]
  let shoppingCart5 = ["orange", "apple", "apple", "banana", "orange", "banana"]
  let codeList6 = [["apple", "apple"],["banana", "anything", "banana"]]
  let shoppingCart6 = ["apple", "apple", "orange", "orange", "banana", "apple", "banana", "banana"]
  let codeList7 = [["anything", "apple"],["banana", "anything", "banana"]]
  let shoppingCart7 = ["orange", "grapes", "apple", "orange", "orange", "banana", "apple", "banana", "banana"]
  let codeList8 = [["apple", "orange"],["orange", "banana", "orange"]]
  let shoppingCart8 = ["apple", "orange", "banana", "orange", "orange", "banana", "orange", "grape"]
  let codeList9 = [["anything", "anything", "anything", "apple"],["banana", "anything", "banana"]]
  let shoppingCart9 = ["orange", "apple", "banana", "orange", "apple", "orange", "orange", "banana", "apple", "banana"]
    
test(codeList1, shoppingCart1, 1);
test(codeList2, shoppingCart2, 0);
test(codeList3, shoppingCart3, 0);
test(codeList4, shoppingCart4, 0);
test(codeList5, shoppingCart5, 1);
test(codeList6, shoppingCart6, 1);
test(codeList7, shoppingCart7, 1);
test(codeList8, shoppingCart8, 1);
test(codeList9, shoppingCart9, 1);
  
  
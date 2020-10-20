//TC: O(s+t^2)   SC:O(1)
const divisibilityOfStrings = (s, t) => {
    let len1 = s.length
    let len2 = t.length
    //if divisible len1 should be a multiple of len2
    if(len1 % len2 !== 0) return -1;
    
    //check if s is divisible by comparing each index value
    for(let i=0;i<len1;i++) {
      if(s[i] !== t[i % len2]) 
        return -1
    }
  
    //check if t is divisible itself
    for(let i=0;i<len2;i++) {
      let subStr = t.substring(0,i+1)
      let isValid = true
      for(let j=0;j<len2;j++) {
        if(subStr[j % subStr.length] !== t[j]) {
          isValid = false
          break
        }
      }
  
      if(isValid)
        return subStr.length
    }
  
    return -1
  }
  
  divisibilityOfStrings("BCDBCDBCDBCD", "BCDBCD")
  //divisibilityOfStrings("ABABAB", "ABAB")
  //divisibilityOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXX")
  //divisibilityOfStrings("LEET", "CODE")
  //divisibilityOfStrings("AAAAAAAAAAAA", "AAACCC")
  //divisibilityOfStrings("wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd", "wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd")
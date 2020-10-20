const calculateSmallestString = (planConfig, displayStr) => {

    //input: planConfig(string) displayStr(string)
    //output: smallest string repetition length 
        //approach -> keep dividing and if planConfig doesn't end with 0 then just return -1

    if (planConfig.length % displayStr.length  !== 0 ) return -1;

    for(let i = 0; i < planConfig.length; i++) {
        if(planConfig[i] !== displayStr[i % displayStr.length]) {
            return -1;
        }
    }

    let saved = ''
    for(let i = 0; i < displayStr.length; i++) {
        let repetitiveString = displayStr.slice(0,i); // b bc bcd
        let pointer = i; // 1
        while(pointer < displayStr.length && repetitiveString !== '') {
            if(repetitiveString !== displayStr.slice(pointer, pointer + i)) {
                break;            
            }
            saved = repetitiveString;   
            pointer++; 
        }
    }

    return saved.length;

}

console.log(calculateSmallestString("bcdbcdbcdbcd", "bcdbcd"));
//console.log(calculateSmallestString("BCDBCDBCDBCDBCD", "BCDBCD"));
//console.log(calculateSmallestString("ABABAB", "ABAB"));
//console.log(calculateSmallestString("TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXX"));
// calculateSmallestString("LEET", "CODE")
console.log(calculateSmallestString("AAACCC", "AAA"));
//console.log(calculateSmallestString("wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd", "wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd"));
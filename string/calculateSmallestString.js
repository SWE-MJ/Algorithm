const calculateSmallestString = (planConfig, displayStr) => {

    //input: planConfig(string) displayStr(string)
    //output: smallest string repetition length 
        //approach -> keep dividing and if planConfig doesn't end with 0 then just return -1

    if (planConfig.length % displayStr.length  !== 0 ) return -1;

    const findSmallestString = (displayStr) => {
        let saved = ''
        for(let i = 0; i < displayStr.length; i++) {
            let repetitiveString = displayStr.slice(0,i);
            //console.log('repetitiveString: ', repetitiveString);
            let pointer = i;
            while(pointer < displayStr.length && repetitiveString !== '') {
                //console.log(displayStr.slice(pointer, pointer + i))
                if(repetitiveString !== displayStr.slice(pointer, pointer + i)) {
                    //console.log('break')
                    break;            
                }
                saved = repetitiveString;   
                pointer++; 

            }
        }
        return saved;

    }

    let value = findSmallestString(displayStr);

    return value.length;

}

//console.log(calculateSmallestString("bcdbcdbcdbcd", "bcdbcd"));
//console.log(calculateSmallestString("BCDBCDBCDBCDBCD", "BCDBCD"));
//console.log(calculateSmallestString("ABABAB", "ABAB"));
console.log(calculateSmallestString("TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXX"));
// calculateSmallestString("LEET", "CODE")
// calculateSmallestString("AAAAAAAAA", "AAACCC")
console.log(calculateSmallestString("wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd", "wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd"));
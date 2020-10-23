//console.log(calculateSmallestString("bcdbcdbcdbcd", "bcdbcd"));
const calculateSmallestString = (planConfig, displayStr) => {

    //checking if the planConfig is divisible by displayStr 
    if(planConfig.length % displayStr.length !== 0) return -1;
    
    //checking if repeated chars are not in the str
    for(let i = 0; i < planConfig.length; i++) {
        if(planConfig[i] !== displayStr[i % displayStr.length]) return -1;
    }

    for(let i = 0; i < displayStr.length; i++) {
        let count = 0;
        console.log('i', i);
        for(let j = 0; j < displayStr.length; j++) {
            console.log('j', j);
            console.log('displayStr[j]', displayStr[j]);
            console.log('displayStr[j % (i+1)]', displayStr[j % (i+1)]);
            if(displayStr[j] !== displayStr[j % (i+1)]) break;
            count++;
        }

        if(displayStr.length === count) return i + 1;
    }


    //input: planConfig(string) displayStr(string)
    //output: smallest string repetition length 
        //approach -> keep dividing and if planConfig doesn't end with 0 then just return -1

    // if (planConfig.length % displayStr.length  !== 0 ) return -1;

    // for(let i = 0; i < planConfig.length; i++) {
    //     if(planConfig[i] !== displayStr[i % displayStr.length]) {
    //         return -1;
    //     }
    // }

    // for (let i = 0; i < displayStr.length; i++) {
    //     let j = 0;
    //     for (; j < displayStr.length; j++) {
    //         console.log('i', i);
    //         console.log('j', j);
    //         console.log("displayStr.charAt(j)", displayStr.charAt(j));
    //         console.log("displayStr.charAt(j % (i + 1))", displayStr.charAt(j % (i + 1)))
    //         if (displayStr.charAt(j) != displayStr.charAt(j % (i + 1))) break;
    //     }
    //     if (j == displayStr.length) return i + 1;
    // }

    // for (let i  = 0; i < displayStr.length; i++) {
    //     let count = 0;
    //     for(let j = 0; j < displayStr.length; j++) {

    //         if(displayStr.charAt(j) !== displayStr.charAt(j % (i+1))) break;
    //         count++;
    //     }

    //     if(count === displayStr.length) return i + 1;
    // }



    // let saved = ''
    // for(let i = 0; i < displayStr.length; i++) {
    //     let repetitiveString = displayStr.slice(0,i); // b bc bcd
    //     let pointer = i; // 1
    //     while(pointer < displayStr.length && repetitiveString !== '') {
    //         if(repetitiveString !== displayStr.slice(pointer, pointer + i)) {
    //             break;            
    //         }
    //         saved = repetitiveString;   
    //         pointer++; 
    //     }
    // }

    // return saved.length;






}


console.log(calculateSmallestString("BCDBCDBCDBCD", "BCDBCD"));
//console.log(calculateSmallestString("ABABAB", "ABAB"));
//console.log(calculateSmallestString("TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXX"));
// calculateSmallestString("LEET", "CODE")
//console.log(calculateSmallestString("AAACCC", "AAA"));
//console.log(calculateSmallestString("wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd", "wqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazdwqzpuogsqcxpqizenbrhcbijieufuxgqpfijuobkqacjkdnzggijhqurwqyrnejckrnghqsyswhczwdicltjdndaebrtgcysulydcsbupkzogewkqpwtfzvjameircaloaqstsoiepynuvxmmthrsdcvrhdijgvzgmtzeijkzixtfxhrqpllspijwnsitnjazd"));
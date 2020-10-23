const transactionLogs = (arr, num) => {

    const cache = {};
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        let ids = arr[i][0].split(' ').slice(0,2);
        const set = new Set();
        for(let k = 0; k < ids.length; k++) {
            
            if(!cache[ids[k]] && !set.has(ids[k])) {
                cache[ids[k]] = 1;
                set.add(ids[k]);
            } else if(cache[ids[k]] && !set.has(ids[k])){
                cache[ids[k]]++;
                set.add(ids[k]);
            } 

        }
    }
    
    for(let key in cache){
        if(cache[key] >= 3) result.push(key)
    }
    
    console.log(result)
}

transactionLogs(
    [['345366 89921 45'],
    ['029323 38239 23'],
    ['38239 345366 15'],
    ['029323 38239 77'],
    ['345366 38239 23'],
    ['029323 345366 13'],
    ['38239 38239 23']], 3);
    //[ '345366', '38239', '029323' ]
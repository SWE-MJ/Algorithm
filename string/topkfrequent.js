const topkfrequent = (k, keywords, reviews) => {

    //input: k (integer)
    //keywords = array of string
    //reviews = list of array with sentences in string
    //output: array of letters sorted most to least with occurring the most in each case

    //approach: 
    //save keywords into object and set value as 0
    const obj = {}
    for(let key of keywords){
        obj[key] = 0;
    }

    //iterate the reviews array
    for(let i = 0; i < reviews.length; i++) {
        // declare a set 
        let words = reviews[i].toLowerCase().replace(/[^a-z]/gi,' ').split(' ');
        // change reviews into lowercase and split it and see if each word is in object and it is not in the set
        let set = new Set();

        for(let word of words) {
            if(obj[word] >= 0 && !set.has(word)){
                // increment the object
                obj[word]++;
                set.add(word);
            }
        }
    }
    

    return Object.keys(obj).sort((a,b) => {
        if(obj[a] > obj[b]) return -1;
        else if(obj[a] < obj[b]) return 1;
        else a.localeCompare(b);
    }).slice(0,2);


    // //channge object back to array with key and value pairs
    // let newArr = []
    // for(let key in obj) {
    //     if(obj[key]){
    //         newArr.push([key, obj[key]])
    //     }
    // }
    
    // //compare occurrence pair and add it as an key and value pair (value will be array)
    // const lastCache = {}
    // for(let [word, occurence] of newArr) {
    //     if(!lastCache[occurence]) {
    //         lastCache[occurence] = [word];
    //     } else {
    //         lastCache[occurence].push(word);
    //     }
    // }
    // // {1: ['ssdf','sdfds'], 2: ['sdfds']}
    // //compare each key and sort it and push the first occurrence to the new result as key and value pair
    // let newResult = [];
    // for(let key in lastCache) {
    //     if(lastCache[key].length > 1){
    //         let valueArr = lastCache[key];
    //         valueArr = valueArr.sort((a,b) => a-b);
    //         newResult.push([valueArr[0],key])
    //     } else {
    //         newResult.push([lastCache[key][0], key])
    //     }
    // }

    // //sort it 
    // newResult = newResult.sort((a,b) => b[1] - a[1]);

    // const finalResult = [];
    // //get top 2
    // for(let i = 0; i < 2; i++) {
    //     finalResult.push(newResult[i][0])
    // }
    // return finalResult;

}

// console.log(topkfrequent(2, ["anacell", "cetracular", "betacellular"], [
//     "Anacell provides the best services in the city",
//     "betacellular has awesome services",
//     "Best services provided by anacell, everyone should use anacell",
//   ], ));

console.log(topkfrequent(2,["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"], [
    "I love anacell Best services; Best services provided by anacell",
    "betacellular has great services",
    "deltacellular provides much better services than betacellular",
    "cetracular is worse than anacell",
    "Betacellular is better than deltacellular.",
  ]));

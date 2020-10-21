//Input: [strings](reviews), [strings](keywords), integer(k) - caseinsesitive
//Output: [strings] most->least sort
//Assumption: multiple keyword in a same review = single mention, equal # of times in reviews, sort alpha
//case insensitive

//strategy
//iterate through reviews for loop
//lowercase, split reviews by space into the array
//iterate through splited review in a loop
//keywords exist and no duplicate, increment the map value
//put it in set for duplicate check
  
//TC: O(N^2)   SC: O(N)
const topKFrequentWords = (keywords, reviews, k) => {
    const map = {}
  
    for(let keyword of keywords) {
      map[keyword] = 0
    } 
  
    for(let review of reviews) {
      let set = new Set()
      let reviewWords = review.toLowerCase().split(' ')
      for(let word of reviewWords) {
        if(word in map && !set.has(word)) {
          map[word]++
          set.add(word)
        }
      }
    }
  
    return Object.keys(map).sort((a,b) => {
      if(map[a] > map[b]) return -1
      else if(map[b] > map[a]) return 1
      else
        return a.localeCompare(b)
    }).slice(0,k)
  }
  
  // topKFrequentWords(
  //   ["anacell", "cetracular", "betacellular"],
  //   [
  //   "Anacell provides the best services in the city",
  //   "betacellular has awesome services",
  //   "Best services provided by anacell, everyone should use anacell",
  //   ], 2
  //   )
  
  
    topKFrequentWords(
    ["anacell", "betacellular", "cetracular", "deltacellular", "eurocell"],
    [
  "I love anacell Best services; Best services provided by anacell",
    "betacellular has great services",
    "deltacellular provides much better services than betacellular",
    "cetracular is worse than anacell",
    "Betacellular is better than deltacellular."
    ], 2
    )
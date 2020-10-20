//Strategy
//paragraph to lowercase, replace non-letter to balnk, trim(), split by space

//Add bannedWords to set in a for loop
//create map key: string, value: count in a for loop
    //Compare max and store maxCount word to mostFrequentWord

//Input: string(paragraph), [strings](banned)
//Output: string(return most frequent word that is not int he list of banned words)
//Assumption: free of punctuation, its all lowercase

//TC: O(N+M)   SC:O(N+M)   N: Each words, M: Banned Words
var mostCommonWord = function(paragraph, banned) {
    const map = {}
    const bannedSet = new Set()
    let mostFrequentWordCount = 0
    let mostFrequentWord = ""
    
    const paragraphArray = paragraph.toLowerCase().replace(/[^a-z ]+/g,' ').trim().split(/\s+/)
    
    for(let word of banned) {
        bannedSet.add(word)
    }
    
    for(let word of paragraphArray) {
        if(!bannedSet.has(word))
            map[word] = map[word] ? map[word] + 1 : 1
        
        if(mostFrequentWordCount < map[word]) {
            mostFrequentWordCount = map[word]
            mostFrequentWord = word
        }
    }
    
    return mostFrequentWord
};
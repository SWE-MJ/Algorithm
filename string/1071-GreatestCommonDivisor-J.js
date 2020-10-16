/*
For two strings s and t, we say "t divides s" if and only if s = t + ... + t  (t concatenated with itself 1 or more times)
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

//Input: string(str1), string(str2), not ordered, duplciate
//output: string(return the largest string x)
//Example: s = "ABA", t="A"    

//TC: O(N^2)  SC:O(1)
var gcdOfStrings = function(str1, str2) {
     if(!str1.length)
        return ""
        
    if(!str2.length)
        return ""
    
    let s1 = ""
    let s2 = ""
    let res = ""
    
    //store longest string to s1, shorted to s2
    if(str1.length >= str2.length) {
        s1 = str1
        s2 = str2
    } else {
        s1 = str2
        s2 = str1
    }
    
    for(let i=0;i<s2.length;i++) {
        let subS2 = s2.substring(0, i+1) 
        let isDivisor = true
        for(let j=0;j<s1.length;j++) {
            if(s1.length%subS2.length !== 0 
               || s2.length%subS2.length !== 0
               || s1[j] !== subS2[j%subS2.length]
              || (j < s2.length && s2[j] !== subS2[j%subS2.length])
              ) {
                isDivisor = false
                break
            }
        }
        
        if(isDivisor)
            res = subS2

    }
    return res
};
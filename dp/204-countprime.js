//Dynamic Programming Approach
var countPrimes = function(n) {
    
    if(n === 0 || n === 1 || n === 2) return 0;
    const arr = new Array(n).fill(1);
    
    for(let i = 2; i <= n; i++) {
        let j = i;
        while(j <= n) {
            if(j + i <= n) arr[j + i] = 0;
            j += i;
        }
    }
    
    return arr.filter(value => value === 1).length -2;
}
    
//[1,2,3,4,5,6,7,8,9,10]
//[1,1,1,1,1,1,1,1,1,1]
    
// Naive Solution
// var countPrimes = function(n) {
//     //non neg integer
//     if(n === 0 || n === 1 || n === 2) return 0; 
 
//     let count = 0;
    
//     let checkPrime = (num) => {
//         let currentNum = num-1;
//         let valid = true;
//         while(currentNum > 1) {
//             if(num % currentNum === 0) {
//              return false;   
//             }
//             currentNum--;
//         }
//         return valid;
//     } 
    
    
//     for(let i = 2; i < n; i++) {
//         if(checkPrime(i)) count++;
//     }
    
//     return count;
    
// };
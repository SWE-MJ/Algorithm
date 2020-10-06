/*
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

//Input: LinkedList(l1), LinkedList(l2)
//Output: LinkedList() (return the sum as a linked list)
//Assumption: Node.val > 0, Duplicate(X), sorted(x), val, next 
//Example:  
//L1: 123 L2: 111  =>  2 -> 3 -> 4
//L1: null L2: 23. => 23
//L1: 999 l2: 111 1110

//Recursion
//TC: O(2^N)    SC: O(N)
var fib = function(N) {    
    if(N <= 1)
        return N
    
    return fib(N-1) + fib(N-2)
};

//Recursion & Memoization
//TC: O(N)      SC: O(N)
var fib = function(N) {
    return fibonacci(N, [])
};

const fibonacci = (N, memo) => {
    if(N <= 1)
        return N
    if(memo[N])
        return memo[N]
    
    memo[N] = fib(N-2) + fib(N-1)
    
    return memo[N]
}


//DP           
//TC: O(N)  SC: O(N)
var fib = function(N) {
    let dp = []
    dp[0] = 0
    dp[1] = 1
    
    for(let i=2;i<=N;i++) {
        dp[i] = dp[i-2] + dp[i-1]
    }
    
    return dp[N]
};

//Optimized
//TC: O(N)  SC: O(1)
var fib = function(N) {
    if(N === 0) return 0
        
    let prev = 0, curr = 1

    for(let i=2;i<=N;i++) {
        let temp = curr
        curr = prev + curr 
        prev = temp
    }

    return curr
};
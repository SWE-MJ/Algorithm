// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

 

// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 
// 1. Recursive, 2. Recursive(memoization), 3. DP


// Assume : it is already N > 1


const recursiveF = (num) => {
	if(num === 0) return 0;
	if(num === 1) return 1;
	
	return recursiveF(num-1) + recursiveF(num-2);
};

// -> O(2^n) /// space complexity
// Let say num = 3


// Call stack



// r(3) 1 + 1 => 2

// Using Memoization

const recursiveF =(num) => {
	
	const cache = {};
	cache[0] = 0 
	cache[1] = 1
	const rec = (num) => {

		if(cache[num]) return cache[num]
		else {
			let value = recursiveF(num -1) + recursiveF(num-2);
			cache[num] = value;
		}
	}
	
	rec(num);
	return cache[num];
}

// {0 : 0, 1: 1, 2: 1, }

// rec(2) 1
// rec(3)
// rec(4)
// rec(5)

// O(n) / O(n)



// Using DP

const DP = (num) => {
	
	const arr = new Array(num + 1).fill(-1); [0,1,1,2,3,5]
	arr[0] = 0; 
	arr[1] = 1;
	for(let I = 2; I <= num; I++) {
		arr[i] = arr[i-1] + arr[i-2]; 
	}
	return arr[num]
}


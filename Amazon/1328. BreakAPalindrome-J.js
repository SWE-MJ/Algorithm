
//Strategy
//if char is not a, return with changed index
//loop until i<j, if not found, change last element to b
const breakPalindrome = (palindrome) => {
    if(palindrome.length <= 1) return ''

    let i = 0
    let j = palindrome.length - 1
    while(i<j) {
        if(palindrome[i] !== 'a') {
            return palindrome.substring(0,i) + 'a' + palindrome.substring(i+1)
        }
        i++
        j--
    }

    return palindrome.substring(0, palindrome.length-1) + 'b';
}
/*
    You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

//Input: linkedList(l1), linkedList(l2) (singly linked list for both, non empty, only pos,)
//Output: linkedList (reutrn the sum as a linked list)
//Assumption: digits are sorted in reverse order: 321 => 1->2->3

//Example: 1->2->3   3 2 1
//         1->2->3   3 2 1 
//         2->4->6   6 4 2
//Example: 1->2      21
//         1->2->3   321    
//         2->4->3   342

//Iterating each digit
//TC: O(max(m,n))   SC: O(max(m,n)) + 1  M:l1.length, N:l2.length
var addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(-1)
    let l3 = dummyHead
    let carry = 0


    while(l1 !== null || l2 !== null || carry) {
        let node1 = l1 ? l1.val : 0
        let node2 = l2 ? l2.val : 0
        let sum = node1 + node2 + carry
        
        carry = sum >= 10 ? 1 : 0
        
        l3.next = new ListNode(sum % 10)
        
        if(l1)
            l1 = l1.next
        if(l2)
            l2 = l2.next
        l3 = l3.next
    }

    return dummyHead.next
};
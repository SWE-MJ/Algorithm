/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
        
    let count = 1;
    let prev = null;
    let current = head;
    // let ahead = head.next;
    
    while(count < m) {
        prev = current;
        current = current.next;
        // ahead = ahead.next;
        count++;
    }
    
    let curCopy = current;
    let prevCopy = prev;

    while(count <= n) {
        let ahead = current.next;
        current.next = prev;
        prev = current;
        current = ahead;
        count++;
    }
    console.log(head)
    curCopy.next = current;
    if(prevCopy) prevCopy.next = prev;
    else head = prev;
    return head;
    
};

// const node = new ListNode(1);
// node.next = new ListNode(2);

// console.log(reverseBetween(node, 1, 2));
// 1 <= 2 <= 3 <= 4 -> 5
//      m         n   

// 1 -> 2 -> 3 -> 4 -> 5
//      m         n   
const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);


console.log(reverseBetween(node, 2,4));
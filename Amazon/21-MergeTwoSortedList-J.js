

//Strategy
//Create dummy node
//Iterate through while loop unitil one of them ends
//compare values, and connect prev to min value
//connect rest

//TC: O(N)  SC: O(1)
var mergeTwoLists = function(l1, l2) {
    //Input: node1, node2
    //Output: node
    //Example: 1 2 4 -> 1 3 4 => 1 1 2 3 4 4
    //Assumption: both are sorted
    let mergeList = new ListNode(-1)
    let prev = mergeList;
    
    while(l1 !== null && l2 !== null) {
       
        if(l1.val <= l2.val) {
            prev.next = l1
            l1 = l1.next
        } else {
            prev.next = l2
            l2 = l2.next
        }
        prev = prev.next
    }
    
    prev.next = l1 == null ? l2 : l1;
    
    return mergeList.next
}
   

var mergeTwoLists = function(l1, l2) {
    if(l1) return l2
    if(l2) return l1
    if(l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
    return null
}
// input
// 2 -> 3 -> 4 (l1)
// 1 -> 2 -> 3 (l2)

// output
// 3 -> 5 -> 7

//Need to consider about carry over number 
//if input is
// 9 -> 9 -> 9 (l1)
// 1 -> 1 -> 1 (l2)

// output
// 1 -> 1 -> 1 -> 0 (carry over the number)

//Assume linked list contructor is defined as next and value property

const linkedListSum = (l1, l2) => {

    //Setting temporary Linked list in the beginning since we don't have head of the linked list
    const output = new LinkedList(-1); //This is so brilliant Jaewon
    let carryOver = 0;
    while(l1 || l2 || carryOver) {
        let value1 = l1.value || 0;
        let value2 = l2.value || 0;

        let sum = value1 + value2 + carryOver;

        carryOver = sum >= 10 ? 1 : 0;
        output.next = new LinkedList(sum % 10);

        if(l1.next) l1 = l1.next;
        if(l2.next) l2 = l2.next;

    }
    //if(carryOver === 1) output.next = new LinkedList(1);

    return output.next; //This is so brilliant Jaewon
}

// Time Complexity Worst => O(n+1) n is length of l1 or l2 (whichever is larger)
// Space Complexity Worst => O(n) space will be taken by max length in between l1 and l2

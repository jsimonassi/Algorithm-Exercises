class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
/**
 * Definition for singly-linked list.
 * /

 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
    let tail = head;
    let acc = false;
    while(l1 != null || l2 != null){
        let l1Value = l1 && l1.val? l1.val : 0;
        let l2Value = l2 && l2.val? l2.val : 0;

        let currentResult = acc ? l1Value + l2Value + 1 : l1Value + l2Value;
        if(currentResult >= 10){
            currentResult = currentResult % 10;
            acc = true;
        }else{
            acc = false;
        }
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        tail.val = currentResult;
        tail.next = l1 || l2 || acc ? new ListNode() : null;
        tail = tail.next;
    }

    if(acc){
        tail.val = 1;
    }

    return head;
};

// 9 -> 9 -> 9 -> 9 -> 9 -> 9 -> 9
// 9 -> 9 -> 9 -> 9
// 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

const l5 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));
const l6 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
console.log(addTwoNumbers(l5, l6)); // [8,9,9,9,0,0,0,1]
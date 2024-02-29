/*
Description:
   - You are given two non-empty linked lists representing two non-negative
     integers. The digits are stored in reverse order, and each of their nodes
     contains a single digit. Add the two numbers and return the sum as a
     linked list.
   - You may assume the two numbers do not contain any leading zero, except the
     number 0 itself.

Example:
   - Input:
      l1 =   [9, 9, 9, 9, 9, 9, 9]
      l2 =   [9, 9, 9, 9]           
   - Output: [8, 9, 9, 9, 0, 0, 0, 1]
*/
import ListNode from "types/ListNode";

// SOLUTION
export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const root = new ListNode();
    let i = root;
    let carray = 0;
    do{
        const l1Val = l1?.val ?? 0;
        const l2Val = l2?.val ?? 0;
        const sum = l1Val + l2Val + carray;
        carray = Math.floor(sum/10);
        i.next = new ListNode(sum % 10);
        i = i.next;
        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }while(l1 || l2 || carray)

    return root.next;
};
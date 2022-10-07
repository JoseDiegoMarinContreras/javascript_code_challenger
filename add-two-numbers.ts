class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const root: ListNode = new ListNode(0);
    let l3: ListNode = root;
    let carry: number = 0
    while(l1  || l2){
        let addition: number = carry;
        if(l1){
            addition += l1.val;
            l1 = l1.next;
        }
        if(l2){
            addition += l2.val;
            l2 = l2.next;
        }

        l3.next = new ListNode(addition%10);
        carry = Math.floor(addition / 10);
        l3 = l3.next;
    }
    if(carry){
       l3.next = new ListNode(1);
    }
    return root.next;
};

function createList(arr: number[]): ListNode | null{
    const root: ListNode = new ListNode(0);
    arr.reduce((prev, val) => {
        prev.next = new ListNode(val);
        return prev.next;
    }, root);

    return root.next;
}

const l1 = createList([2,4,3]);
const l2 = createList([5,6,4]);
console.log(addTwoNumbers(l1, l2));
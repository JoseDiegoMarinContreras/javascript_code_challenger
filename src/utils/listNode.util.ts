import ListNode from "types/ListNode";

export function arrayToListNode(arr: number[]): ListNode | null {
    const root: ListNode = new ListNode(0);
    arr.reduce((prev, val) => {
        prev.next = new ListNode(val);
        return prev.next;
    }, root);

    return root.next;
}

export function listNodeToArray(l1: ListNode | null): number[] {
    const res: number[] = [];
    while(!!l1){
        res.push(l1.val);
        l1 = l1.next;
    }
    return res;
}
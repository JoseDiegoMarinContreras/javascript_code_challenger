import addTwoNumbers from 'src/02-add-two-numbers';
import { arrayToListNode, listNodeToArray, } from 'utils/listNode.util';

describe('Add two numbers test', () => {
    test('Input: l1 = [2,4,3], l2 = [5,6,4]', () => {
        const [l1, l2] = [
            arrayToListNode([2,4,3]),
            arrayToListNode([5,6,4])
        ];
        const result = addTwoNumbers(l1, l2);
        expect(listNodeToArray(result)).toEqual([7,0,8]);
    });

    test('Input: l1 = [0], l2 = [0]', () => {
        const [l1, l2] = [
            arrayToListNode([0]),
            arrayToListNode([0])
        ];
        const result = addTwoNumbers(l1, l2);
        expect(listNodeToArray(result)).toEqual([0]);
    });

    test('Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]', () => {
        const [l1, l2] = [
            arrayToListNode([9, 9, 9, 9, 9, 9, 9]),
            arrayToListNode([9, 9, 9, 9])
        ];
        const result = addTwoNumbers(l1, l2);
        expect(listNodeToArray(result)).toEqual([8,9,9,9,0,0,0,1]);
    });
});
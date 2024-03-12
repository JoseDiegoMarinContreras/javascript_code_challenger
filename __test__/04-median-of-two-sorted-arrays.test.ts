import findMedianSortedArrays from 'src/04-median-of-two-sorted-arrays';

describe('Median of Two Sorted Arrays', () => {
    test('Input: nums1=[1, 3], nums2=[2]', () => {
        const [nums1, nums2] = [
            [1, 3,],
            [2,]
        ];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toEqual(2);
    });

    test('Input: nums1=[1, 2], nums2=[3, 4]', () => {
        const [nums1, nums2] = [
            [1, 2,],
            [3, 4,]
        ];
        const result = findMedianSortedArrays(nums1, nums2);
        expect(result).toEqual(2.5);
    });
});
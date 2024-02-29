import twoSum from 'src/01-two-sum';

describe("Two Sum test", () => {
    test('Input: nums = [2,7,11,15], target = 9', () => {
        const [nums, target] = [[2, 7, 11, 15], 9];
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });

    test('Input: nums = [3,2,4], target = 6', () => {
        const [nums, target] = [[3,2,4], 6];
        expect(twoSum(nums, target)).toEqual([1, 2]);
    });

    test('Input: nums = [3,3], target = 6', () => {
        const [nums, target] = [[3,3], 6];
        expect(twoSum(nums, target)).toEqual([0, 1]);
    });
});
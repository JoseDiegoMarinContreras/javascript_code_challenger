import lengthOfLongestSubstring from 'src/03-longest-substring-without-repeating-characters';

describe('Longest Substring Without Repeating Characters', () => {
    test('Input: s = "abcabcbb"', () => {
        const s = "abcabcbb";
        const result = lengthOfLongestSubstring(s);
        expect(result).toEqual(3);
    });

    test('Input: s = "bbbbb"', () => {
        const s = "bbbbb";
        const result = lengthOfLongestSubstring(s);
        expect(result).toEqual(1);
    });

    test('Input: s = "pwwkew"', () => {
        const s = "pwwkew";
        const result = lengthOfLongestSubstring(s);
        expect(result).toEqual(3);
    });
});
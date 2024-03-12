/*
Description:
   - Given a string s, find the length of the longest substring without}
     repeating characters.

 

Example:
   - Input:
      s = "abcabcbb"
   - Output: 3 
   - Explanation: The answer is "abc", with the length of 3.
*/

// SOLUTION
export default function lengthOfLongestSubstring(s: string): number {
    const mapper = new Map<string, number>();
    let start = 0;
    let result = 0;
    for(let i = 0; i < s.length; i++){
        const sAtI = s.at(i)!;
        if(mapper.has(sAtI) && mapper.get(sAtI)! >= start){
            start = mapper.get(sAtI)! + 1;
        }
        mapper.set(sAtI, i);
        result = Math.max(i - start + 1, result);
    }
    return result
};

const s = "abcabcbb";
const result = lengthOfLongestSubstring(s);
console.log(result);
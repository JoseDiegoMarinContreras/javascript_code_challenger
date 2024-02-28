// Given a string s, return the longest palindromic substring in s.
function isAPalindrome(s: string): boolean{
    return s.split('').reverse().join() === s;
}

function longestPalindrome(s: string): string {
    if(isAPalindrome(s)){
        return s;
    }

    if(s.length < 3){
        return s[0];
    }

    let l_i: number = 0;
    let start: number = 0;
    let size: number = 1;

    for(let i: number = 0;i < s.length; i++){
        l_i = i - size;
        let s1: string = s.substring(l_i - 1, i);
        let s2: string = s.substring(l_i, i);

        if(s1.length >= size && isAPalindrome(s1)){
            start = l_i - 1;
            size += 2;
        }else if(s2.length >= size && isAPalindrome(s2)){
            start = l_i;
            size += 1;
        }
    }
    return s.substring(start, start + size+1);
};


let s: string;

// ccc
s = "ccc";
console.log(longestPalindrome(s));

// bb
s = "cbbd";
console.log(longestPalindrome(s));

// bb
s = "abb";
console.log(longestPalindrome(s));
/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of
rows like this: (you may want to display this pattern in a fixed font for
better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"
*/

function convert(s: string, numRows: number): string {
    if(numRows === 1){
        return s;
    }
    let arr: string[] = Array<string>(numRows).fill("");
    let step = 0;
    let i = 0;
    for(let c of s){
        arr[i] = arr[i] + c;
        step = i == 0? 1 : i == numRows - 1? -1 : step;
        i += step;
    }
    return arr.join("");
}

let s: string;
let numRows: number;

//PAHNAPLSIIGYIR
s = "PAYPALISHIRING";
numRows = 3;
console.log(convert(s, numRows));
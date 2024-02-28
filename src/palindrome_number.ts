function isPalindrome(number: number): boolean{
    const number_str: string = number.toString();
    const reversed_number_str: string = number_str.split("").reverse().join("");

    return number_str == reversed_number_str;
}

function isPalindrome_INT(number: number): boolean{
    let accarry: number = 0;
    let temp_number: number = number;

    while(temp_number > 0){
        accarry *= 10;
        accarry += temp_number%10;
        temp_number = Math.floor(temp_number/10);
    }

    return number == accarry;
}

const value = 123454321;

//console.time("isPalindrome");
console.log(isPalindrome(value));
//console.timeEnd("isPalindrome");

//console.time("isPalindrome(INT)");
console.log(isPalindrome_INT(value));
//console.timeEnd("isPalindrome(INT)");
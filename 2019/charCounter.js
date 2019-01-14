//https://www.codewars.com/kata/52efefcbcdf57161d4000091/

//The main idea is to count all the occuring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

//If the string is empty. then the result should be empty object literal { }



function count (string) {  
    let charCounter = {}
    const allChars = string.split("");
    for (let char of allChars) {
    charCounter[char] = (charCounter[char] || 0) + 1;
 }
    return charCounter;
 }
// 1. You are to write an function that takes a string as it's first paramter. 
// This string will be a string of words.

// 2. You are expected to then use the second parameter, which will be an integer, 
// to find the corresponding word in the given string. The first word would be 
// represented by 0.

// 3. Once you have the located string you are finally going to multiply by it 
// the third provided paramater, which will also be an interger. You are 
// additionally required to add a hyphen in between each word.


const modifyMultiply = (str,loc,num) => {
    let arr = str.split(" ");
    let newArr = [];
    for (num; num>0; num--) {
      newArr.push(arr[loc]);
    }
    return newArr.join("-");
   
   } 


// Best solution:

//    function modifyMultiply(str,i,n) {
//     return Array(n).fill(str.split(' ')[i]).join('-');
//   } 
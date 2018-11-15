//Given an array of integers of any length, return an array that has 1 added to 
//the value represented by the array.

// - the array can't be empty
// - only non-negative, single digit integers are allowed
// Return null for invalid inputs.




function upArray(arr){
    let finArr = [];
    if (arr === undefined || arr.length == 0) {
      return null;
    }
    else if ( arr.some(v => v < 0) || arr.some(v => v > 9)) {
      return null;
    }
    //handling large numbers
    else if (arr.length>10) {
       console.log(Number(arr.slice((arr.length - 6), arr.length).join(''))+1)
       let endArr = (Number(arr.slice((arr.length - 6), arr.length).join(''))+1)
       return finArr = arr.slice(0, (arr.length - 6)).concat(endArr.toString().split("").map(Number))
  
    }
    else {
      finArr = Number(arr.join(''))+1;
      return finArr.toString().split("").map(Number);    
     }

} 
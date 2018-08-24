
// Your code must return true or false depending upon whether the given number is 
// a Narcissistic number (a number which is the sum of its own digits, each 
// raised to the power of the number of digits.)


function narcissistic( value ) {
    var pwdDigArray = [];
    var s=value.toString() //convert to string
    for (i=0; i<s.length; i++) {
      pwdDigArray.push(s[i]**s.length);  //create the array to sum up the exponents
    } 
    return (value === pwdDigArray.reduce((a, b) => a + b, 0)) //check if the value equals the sum of the array
  }
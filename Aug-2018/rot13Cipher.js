// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
// ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are 
// numbers or special characters included in the string, they should be returned as they are. Only 
// letters from the latin/english alphabet should be shifted, like in the original Rot13 
// "implementation".




function rot13(message){
    var alphabet = ("abcdefghijklmnopqrstuvwxyz").split("");
    var finalArr = [];
    for (i=0; i<message.length; i++) {
     if ( /[^a-zA-Z]/.test( message[i] )) {finalArr.push( message[i])}
     else if ((message[i] === message[i].toLowerCase()) && (message[i] !== message[i].toUpperCase())) {
        if (alphabet.indexOf(message.toLowerCase().charAt(i))>=13) {
          finalArr.push(alphabet[alphabet.indexOf(message.toLowerCase().charAt(i))-13]);
        }
        else {
          finalArr.push(alphabet[alphabet.indexOf(message.toLowerCase().charAt(i))+13]);
        } 
      } else {
         
        if (alphabet.indexOf(message.toLowerCase().charAt(i))>=13) {
          finalArr.push(alphabet[alphabet.indexOf(message.toLowerCase().charAt(i))-13].toUpperCase());
        }
        else {
          finalArr.push(alphabet[alphabet.indexOf(message.toLowerCase().charAt(i))+13].toUpperCase());
        } 
      }
  
    }
  console.log(message, alphabet.length, finalArr.join(''))
  return finalArr.join('')
  
  }


  //Slightly improved:

  function rot13(message){
    var alphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmn"
    var finalArr = [];
    for (i=0; i<message.length; i++) {
      if ( /[^a-zA-Z]/.test( message[i] )) {finalArr.push( message[i])}
      else if ((message[i] === message[i].toLowerCase())) {
          finalArr.push(alphabet[alphabet.indexOf(message.charAt(i))+13]);
      } 
      else {
          finalArr.push(alphabet.toUpperCase()[alphabet.toUpperCase().indexOf(message.charAt(i))+13]);
        } 
    }
  return finalArr.join('')
} 
  

//   Best Solution:
//   function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//     return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
//   }
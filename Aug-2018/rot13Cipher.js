



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
  

//   Best Solution:
//   function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//     return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
//   }
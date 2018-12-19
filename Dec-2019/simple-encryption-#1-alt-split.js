// https://www.codewars.com/kata/simple-encryption-number-1-alternating-split/javascript

//For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, 
// and concat them as new String.
// Do this n times!

// Examples:

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

// For both methods:
// If the input-string is null or empty return exactly this value!
// If n is <= 0 then return the input text.



const encrypt = (text, n) => {
    let encoded = text;
    if (!text) {
       return text;
      }
    else if ( n<=0 ) {
       return text;
       }
    else {
      for (i=0; i<n; i++) {
        let p1 = "";
        let p2 = ""; 
        for (j=1; j<text.length; j+=2) {
          p1+=encoded[j]
          p2+=encoded[j-1]
          }
        encoded = p1+p2;
      }
      if (text.length % 2 !== 0) {
        encoded = encoded + text[text.length-1]
      } 
     return encoded;
    }
    
    }
    
    const decrypt = (encryptedText, n) => {
      let decoded = encryptedText;
      if (!encryptedText) {
       return encryptedText;
      }
    else if ( n<=0 ) {
       return encryptedText;
       }
    else {
        for (i=0; i<n; i++) {
        let p1 = "";
        // let p2 = ""; 
       for (j=0; j<encryptedText.length/2; j++) {
             p1 = p1 + decoded[j+Math.floor(encryptedText.length/2)] + decoded[j]
           }
          decoded = p1;
         }
        if (encryptedText.length % 2 !== 0) {
            decoded = decoded.substring(0, encryptedText.length)
          }   
      return decoded;
      }
    }
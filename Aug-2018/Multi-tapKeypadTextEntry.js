// Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages 
// on candybar-shaped feature phones with 3x4 numeric keypads.

// ------- ------- -------
// |     | | ABC | | DEF |
// |  1  | |  2  | |  3  |
// ------- ------- -------
// ------- ------- -------
// | GHI | | JKL | | MNO |
// |  4  | |  5  | |  6  |
// ------- ------- -------
// ------- ------- -------
// |PQRS | | TUV | | WXYZ|
// |  7  | |  8  | |  9  |
// ------- ------- -------
// ------- ------- -------
// |     | |space| |     |
// |  *  | |  0  | |  #  |
// ------- ------- -------

// In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. 
// For this assignment, write a module that can calculate the amount of button presses required for any phrase. 
// Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between 
// upper/lowercase characters (but you should allow your module to accept input in either for convenience).


function presses(phrase) {
    var keyboard = [ '1', 'abc2', 'def3', 'ghi4', 'jkl5', 'mno6', 'pqrs', 'tuv8', 'wxyz', ' 0']
    var pressCount = 0;
    for (i=0; i<phrase.length; i++) {
       for (j=0; j<keyboard.length; j++) {
       if (keyboard[j].indexOf(phrase[i].toLowerCase())+1 > 0 ) {
       pressCount= pressCount + keyboard[j].indexOf(phrase[i].toLowerCase())+1
       }
     } 
    }
    return pressCount
  }


  //best practice:

//   function presses(phrase) {
//     var chunks = ['1', 'ABC2', 'DEF3', 'GHI4', 'JKL5', 'MNO6', 'PQRS7', 'TUV8', 'WXYZ9', ' 0'],
//         phrase = phrase.toUpperCase().split(''),
//         total = 0;
    
//     phrase.forEach(function(l) {
//       var key = chunks.filter(function(c) {
//         return c.indexOf(l) > -1;
//       })[0];
//       total += key.indexOf(l) + 1;
//     });
    
//     return total;
        
//   }
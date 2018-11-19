//Given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

//E.g. "a" = 1, "b" = 2, etc.


function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let finArr = [];
    for (i=0; i<text.length; i++) {
       if ( alphabet.indexOf(text[i].toLowerCase())+1 ) {
         finArr.push(alphabet.indexOf(text[i].toLowerCase())+1)
       }   
     }
    return finArr.join(" ").toString();
  }
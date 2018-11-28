// Given an array (arr) as an argument complete the function countSmileys 
//that should return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :] 


//return the total number of smiling faces in the array


const countSmileys = (arr) => {
    let smileCount = 0;
    arr.forEach((elmt) => {
  
      if (elmt.length > 3) { console.log("no smiley here") }
      else if (elmt.includes(';') || elmt.includes(':')) {
            elmt = elmt.substr(1);
        if (elmt.includes(')') || elmt.includes('D')) {
           elmt = elmt.substr(0, elmt.length-1);
           if (elmt == "") {
            smileCount++;
           } else if (elmt.includes('~')|| elmt.includes('-')) {
            smileCount++;
           }
       
        }
      }
  
    })
   return smileCount;
  }
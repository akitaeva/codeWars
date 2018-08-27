//An isogram is a word that has no repeating letters, 
//consecutive or non-consecutive. Implement a function 
//that determines whether a string that contains only 
//letters is an isogram. Assume the empty string is an isogram.
//  Ignore letter case.


function isIsogram(str){
    if (str == '') { return true}
    var newS = str.toLowerCase();
    console.log(newS);
    for (i=0; i<newS.length; i++) {
      console.log(newS.split(newS[i]).length-1)
       if ((newS.split(newS[i]).length-1)>1)
         { return false} 
       }
   return true
  }


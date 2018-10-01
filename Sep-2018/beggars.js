// Given an array of values and an amount of beggars, you are supposed to return an array with the sum of 
// what each beggar brings home, assuming they all take regular turns, from the first to the last.
// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], 
// the second collects [2,4].
// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: 
// [5,7,3], as they will respectively take [1,4], [2,5] and [3].

function beggars(values, num){
    var takes = new Array(num).fill(0);
    for (i=0; i<values.length; i++) {
      if (values.length<=takes.length) {
        takes[i]=+values[i]
        }
      else {
        takes[i%num] += values[i]
      }
    }  
    return takes; 
  }
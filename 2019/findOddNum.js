// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.




const findOdd = (arr) => {
    let counter = {};
    for (let elmt of arr) {
    counter[elmt] = (counter[elmt] || 0) + 1;
  } 
  
  for (let i=0; i<arr.length; i++) {
   if (counter[arr[i]] % 2 !== 0) 
     return arr[i];
   }
    
  }

// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]);
// findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]);
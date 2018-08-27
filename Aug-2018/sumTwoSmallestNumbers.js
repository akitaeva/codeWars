//Create a function that returns the sum of the two lowest 
// positive numbers given an array of minimum 4 integers. 
// No floats or empty arrays will be passed.

// For example, when an array is passed like 
// [19, 5, 42, 2, 77], the output should be 7.



function sumTwoSmallestNumbers(numbers) {  
    var smallestSum = []
    console.log(numbers);
    for (i=0; i<2; i++) {
       var min = Math.min.apply(null,numbers);
       numbers.splice(numbers.indexOf(min),1);
       smallestSum.push(min);
       
    }
    console.log(smallestSum.reduce(( a, b ) => a + b, 0));
    return smallestSum.reduce(( a, b ) => a + b, 0);
  };
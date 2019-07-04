// https://www.codewars.com/kata/tribonacci-sequence/javascript

// summing the last 3 (instead of 2) numbers of the sequence to generate the next

const tribonacci = (signature,n) => {
  if (n===0) return [];
  let triSec = new Array(n);
  for (i=0; i<n; i++) {
     i<3 ? triSec[i] = signature[i] 
     :
     triSec[i]= triSec[i-3]+triSec[i-2]+triSec[i-1]
  }
  return triSec;
}

// tribonacci([1,2,3], 10);
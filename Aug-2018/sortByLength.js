// Write a function that takes an array of strings as an argument and returns 
// a sorted array containing the same strings, ordered from shortest to longest.


function sortArr (arr) {
  arr.sort(function (a, b) {
  return a.length - b.length;
  })
 return arr;
}


// best solution
// let sortByLength = arr => arr.sort((a,b) => a.length - b.length);
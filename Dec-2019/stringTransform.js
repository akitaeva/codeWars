//https://www.codewars.com/kata/5878520d52628a092f0002d0/train/javascript

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.



const stringTransformer = (str) => {
    let res = str.split(' ').reverse().join(' ')
    .replace(/([a-z]+)|([A-Z]+)/g, (_, low, up) => { 
         return low ? low.toUpperCase() : up.toLowerCase() 
      })
 return res;
  }
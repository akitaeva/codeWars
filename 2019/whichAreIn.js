// https://github.com/akitaeva/codeWars/tree/master/2019

// Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings 
// of a1 which are substrings of strings of a2. 
// a1 and a2 are strings. The return is a string where words are separated by commas.
// Beware: r must be without duplicates.
// Don't mutate the inputs.

const inArr = (arr1, arr2) => {
  const newArr = [];
  a1.filter(word => a2.forEach(str => {
    if (str.includes(word) && !newArr.includes(word)) newArr.push(word);
  }));
  return newArr.sort();
}

// a1 = [ 'he', 'by', 'oint', 'oes', '1.9', 'omm', 'pini', 'wh', 'ing', 'ou' ];
// a2 = [ 'have', 'your', 'somewhere).', 'ruby-doc.', 'would', 'have', '(since', 'have', 'pointed', 'your', 'that', 'I', 'is', 'perfect', 'not', '1.9.2.', 'am', 'In', 'versioning;', 'known', 'am', 'for', 'out', 'should', 'apidock', 'for', 'me', 'I', 'you', 'using', 'Ruby,', 'does', 'to' ];
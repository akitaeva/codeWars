// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

// Write a function to convert a name into initials. 
// This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot seperating them.

function abbrevName(name){
  return name.split(' ').map(x => x.substr(0, 1).toUpperCase()).join('.');
}

// abbrevName("David Mendieta")
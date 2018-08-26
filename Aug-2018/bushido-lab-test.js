
var palindromeChainLength = function(n) {
  var sum = n, counter = 0;
 if (n.toString() == n.toString().split('').reverse().join('')) {
   console.log(sum, counter);
   return counter;
 }
 else { 
   while (sum.toString() !== sum.toString().split('').reverse().join('')) {
   sum = sum + Number(sum.toString().split('').reverse().join(''))
   counter ++;
   console.log(sum, counter);
    }
  console.log("final ", sum, counter);
   return sum, counter;
 }
};

// palindromeChainLength(121);
palindromeChainLength(87);
// palindromeChainLength(726);
palindromeChainLength(7);


function lookSay (number) {  //return a sting of "instance of a digit" folowed by "digit"
  var repArr = [];
  var final = [];
  var unique = number.toString().split('').filter(function(item, i, array){ 
  return array.indexOf(item) === i; })
  .join('');
  console.log(unique);
  for (i=0; i<unique.length; i++) {
    repArr.push(number.toString().split(unique[i]).length - 1);
    final.push(repArr[i], unique[i]);
  }
  console.log(final, final.join(''));
  return final.join('');


}

lookSay(6663777834);
lookSay(11);

function firstNonRepeatingLetter(str) {
  var newS = str.toLowerCase();
  for (var i = 0; i < newS.length; i++) {
    var c = newS.charAt(i);
    if (newS.indexOf(c) == i && newS.indexOf(c, i + 1) == -1) {
      return str[(newS.indexOf(c))];
    }
  }
  return "";
}

firstNonRepeatingLetter("blaXblahbla");
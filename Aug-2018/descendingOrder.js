// make a function that can take any non-negative integer as a argument and return it 
// with its digits in descending order. Essentially, rearrange the digits to create the 
// highest possible number.



function descendingOrder(n){
  var arr = n.toString().split('');
  num = arr.sort(function (a, b) {  return a - b;  }).reverse().join('')
  console.log(arr, num)
}
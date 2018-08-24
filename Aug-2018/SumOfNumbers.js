// Given two integers a and b, which can be positive or negative, find the sum 
// of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!


function GetSum( a,b )
{ var sum = 0;
  if (a>b){
    while (a>=b) {
      sum=sum+a;
      a--;
    }
  }
  else if (a<b) {
     while (a<=b) {
      sum=sum+a;
      a++;
    }
  }
  else {
    sum = a;
    }
  return sum;
 
}


// ?! Optimal solution:

// function GetSum( a,b )
// {
//    if (a == b) return a;
//    else if (a < b) return a + GetSum(a+1, b);
//    else return a + GetSum(a-1,b);
// }
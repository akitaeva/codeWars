// find out which one of the given numbers differs from the others. Since 
// one number usually differs from the others in evenness. Among the given 
// numbers find one that is different in evenness, and return a position of 
// this number.


const iqTest = (numbers) => {
    let evn=0, odd = 0, evI, odI;
    let numArr = numbers.split(" ");
    console.log(numArr)
    for (i=0; i<numArr.length; i++) {
       if (numArr[i]%2 == 0) 
       {
         evn++;
         evI = i+1; 
         console.log(numArr[i], "evn in the loop", evn);
       }
       else 
       { 
         odd++;
         odI = i+1;
         console.log(numArr[i], "odd in the loop", odd);
       }
    }
    if (evn === 1) { return  evI }
    else  { return  odI }
   
   }
   
   iqTest("2 4 7 8 10");
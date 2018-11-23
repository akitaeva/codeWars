// You will be given a number and you will need to return it as a string 
//in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const expandedForm = (num) => {

    let extArr = [];
    let numArr = num.toString().split("")
    for (i=0; i<numArr.length; i++) {
      if (numArr[i]==0) {continue}
      extArr.push(numArr[i]*(10**(numArr.length-i-1)))
    }
    console.log(numArr, extArr)
    return extArr.join(" + ");
   }
   
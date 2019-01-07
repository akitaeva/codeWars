// The description:
// https://www.codewars.com/kata/how-much/train/javascript

const howmuch = (m, n) => {
    // check which is greater m or n
    const start = Math.min(m, n);
    const end = Math.max(m, n);
    let resultArr = [];
    //iterate from lesser to greater adding 1 and check if the division remnant in formula is 0
    for (let i = start; i<= end; i++) {
      if ( (i-1) % 9 == 0 && (i-2) % 7 == 0 ) {
        c = (i-1) / 9;
        b = (i-2) / 7;
        const money = "M: " + i.toString();
        const boats = "B: " + b.toString();
        const cars  = "C: " + c.toString();
        const result = [money, boats, cars];
        resultArr.push(result);
        console.log("result: ", result);
      }
    }
    //return an array (or array of arrays with all possible values for M, C and B 
    return resultArr;
}


// howmuch(1, 100);
// howmuch(10000, 9950); 
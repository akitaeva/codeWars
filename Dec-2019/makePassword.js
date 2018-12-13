//https://www.codewars.com/kata/5637b03c6be7e01d99000046/solutions/javascript


const makePassword = (phrase) =>{
    const wordArr = phrase.split(" ").map(x => x.charAt(0));
    const finArr = []
    wordArr.forEach(x => {
      switch ( x.toLowerCase() ) {
        case 'i':
        x = '1';
        break;
        case 'o':
        x = '0';
        break;
        case 's':
        x = '5';
        }
     finArr.push(x);   
    })
    console.log(wordArr, finArr);
    return finArr.join('')
   }
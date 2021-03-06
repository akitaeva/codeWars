//https://www.codewars.com/kata/exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-to-the-balance-are-they-balanced/train/javascript

//Each exclamation mark weight is 2; Each question mark weight is 3. 
//Put two string left and right to the balance, Are they balanced?

//If the left side is more heavy, return "Left"; If the right side is more heavy, return "Right"; 
//If they are balanced, return "Balance".


function balance(left,right){
    let leftCounter = {"!": 0, "?": 0}
    let rightCounter = {"!": 0, "?": 0}
    for (let i = 0; i < left.length; i++) {
      let char =  left[i];
       leftCounter[char] += 1 ;
    }  
    for (let i = 0; i < right.length; i++) {
      let char =  right[i];
       rightCounter[char] += 1 ;
    }   
    
    const leftWeight =  leftCounter["!"]*2 +  leftCounter["?"]*3
    const rightWeight = rightCounter["!"]*2 + rightCounter["?"]*3
    
    if ( leftWeight === rightWeight) { return "Balance"}
    else if ( leftWeight > rightWeight) { return "Left"}
    else { return "Right"}
  }


//balance("!!","??") === "Right"
//balance("!?!!","?!?") === "Left"
//balance("!!???!????","??!!?!!!!!!!") === "Balance" 


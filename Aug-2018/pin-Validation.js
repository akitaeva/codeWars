// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything 
// but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.
// https://www.codewars.com/kata/regex-validate-pin-code/javascript



function validatePIN (pin) {
var pinLength=pin.length;
var pinNum = Number(pin); //error
// console.log(pinLength, pinNum, pin.match(/[^0-9]/g))
console.log(!pinNum)
// console.log(Number.isInteger(pinNum))


if (pin.match(/[^0-9]/g)) {
 return false;
}
else if (pinLength !==4 && pinLength!==6) {
    return false;
  } 
  else if ( !pinNum && pinNum !== 0) {

    return false;
  } else if (pinNum == Number(0)) { 
   
    return true;
  } else {
  return true;
    }
  //return true or false
}

// Best and simplest solution :
//   function validatePIN (pin) {
//     return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
//    }

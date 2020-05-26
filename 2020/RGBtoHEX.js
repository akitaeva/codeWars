// Passing in RGB decimal values must result in a hexadecimal representation 
// being returned. Valid decimal values for RGB are 0 - 255. Any values that 
// fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 
// 3 will not work here.


function rgb(r, g, b){

  const converter = ( num ) => {
  if (num > 255) {
     return 'FF'
  }
   else if  ( num < 0 ) {
   return '00'
  } else {
    return ("0"+(Number(num).toString(16))).slice(-2).toUpperCase()
   }
  }
 
  return converter(r) + converter(g) + converter(b)
}


// rgb(255, 255, 300)       // returns FFFFFF
// rgb(0,0,0)               // returns 000000
// rgb(148, 0, 211)         // returns 9400D3
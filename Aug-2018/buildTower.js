// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// Tower block is represented as *
// JavaScript: returns an Array;

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]

function towerBuilder(nFloors) {
    var towerArr = Array(nFloors)
    var mult = nFloors
    for(i = nFloors-1; i>=0; i--) {
        towerArr[i]= " ".repeat(nFloors - mult) + "*".repeat((mult*2)-1) +" ".repeat(nFloors - mult);
        mult--;
    }
   return(towerArr)
  }

  
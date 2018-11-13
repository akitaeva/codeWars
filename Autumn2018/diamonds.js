//You need to return a string that displays a diamond shape on the screen 
//using asterisk ("*") characters.
//The shape that will be returned from print method resembles a diamond, 
//where the number provided as input represents the number of *’s printed 
//on the middle line. The line above and below will be centered and will 
//have 2 less *’s than the middle line. This reduction by 2 *’s for each line 
//continues until a line with a single * is printed at the top and bottom of the figure.
//Return null if input is even number or negative (as it is not possible to 
//print diamond with even number or negative number).


const diamond = (n) => {
    if (n%2==0 || n<0) {
      return null;
    }
    let diam="", diam2 = "";
    for (i=0; i<n/2-1; i++) {
      diam = diam + " ".repeat((n-1)/2-i)+"*".repeat(1+2*i)+"\n"
      diam2 = " ".repeat((n-1)/2-i)+"*".repeat(1+2*i)+"\n" + diam2
    }
  
    let diam3 = diam + "*".repeat(n)+"\n" + diam2
  
    
    return diam3;
  }
//https://www.codewars.com/kata/vasya-clerk/train/javascript

//There are a lot of people at the cinema box office standing in a huge line. 
//Each of them has a single 100, 50 or 25 dollars bill. A ticket costs 25 dollars.

//Clerk wants to sell a ticket to every single person in this line. Can he sell a 
//ticket to each person and give the change if he initially has no money and sells 
//the tickets strictly in the order people follow in the line?

//Return YES, if Vasya can sell a ticket to each person and give the change with 
//the bills he has at hand at that moment. Otherwise return NO.

function tickets(peopleInLine){
    if (peopleInLine[0] !== 25) { return "NO"}
    let moneyBag = { [25]: 1};
    for ( let i=1; i<peopleInLine.length; i++) {
      if (peopleInLine[i] === 25) {
         moneyBag[25] += 1;
        } 
      else if (peopleInLine[i] === 50 && moneyBag[25] >= 1 ) {
         moneyBag[25] -= 1;
         moneyBag[50] ? moneyBag[50] += 1 : moneyBag[50] = 1;
        } 
      else if (peopleInLine[i] === 100 && (moneyBag[25] >= 1 && moneyBag[50] >= 1 || moneyBag[25] >= 3 )) {
         moneyBag[100] ? moneyBag[100]=+ 1 : moneyBag[100]=1;
         if (moneyBag[50]) {
            moneyBag[50] -= 1;
            moneyBag[25] -= 1;
         } else {
            moneyBag[25] -= 3;
         }
      }   
      else {
      return "NO"
      } 
    }
   return "YES" 
  }


  //tickets([25, 25, 50, 50]);
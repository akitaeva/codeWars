//https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

// a function cakes() takes the recipe (object) and the available ingredients (also an object) and returns 
// the maximum number of cakes Pete can bake (integer). 

const cakes = (recipe, available) => {
  let amountRatios = [];
  for (ing in recipe) {
    if (!available[ing]) return 0;
    const avail = available[ing];
    amountRatios.push(avail/recipe[ing]);
  }
  const valArr = amountRatios.filter(amt => amt !== 0);
  return Math.floor(Math.min.apply(Math, valArr));
}

// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
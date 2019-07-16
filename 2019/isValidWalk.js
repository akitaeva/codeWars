//https://www.codewars.com/kata/take-a-ten-minute-walk/javascript

// The city provides its citizens with a Walk Generating App on their phones -- everytime you 
// press the button it sends you an array of one-letter strings representing directions 
// to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction 
// and you know it takes you one minute to traverse one city block && all roads are laid out in a perfect grid, 
// so create a function that will return true if the walk the app gives you will take you exactly 
// ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. 
// Return false otherwise.


function isValidWalk(walk) {
  let dirCounter = {};
  let x, y = true;
  for (let i = 0; i < walk.length; i++) {
    let dir =  walk[i];
    dirCounter[dir] ? dirCounter[dir] += 1 : dirCounter[dir] = 1;
  } 
  if (walk.length % 10 === 0) {  
    if (dirCounter.n || dirCounter.s) { x = dirCounter.n===dirCounter.s }
    if (dirCounter.e || dirCounter.w) { y = dirCounter.e===dirCounter.w }
  }  
  const z = x && y
  return z;
}
// https://www.codewars.com/kata/5901438ce593353de6000055

// Task There are several points on the wall, each has x and y coordinates. Two points can be connected either with vertical or with horizontal lines. Count the number of rectangles that can be obtained by connecting 4 points.
// [input] 2D integer array points

// Array of unique elements. Each element is a 2-element array, containing x and y coordinates of a point.
// [output] an integer  - The number of rectangles.

function countRectangles(points) {
let finalCount = 0;

if (points.length < 4) return finalCount;

const distSq = (point1, point2) => {
  return (point1[0] - point2[0]) *  (point1[0] - point2[0]) + (point1[1] - point2[1]) *  (point1[1] - point2[1]);
}

const isReq = (comb) => {
  const d1 = distSq(comb[0], comb[1]);
  const d2 = distSq(comb[1], comb[2]);
  const d3 = distSq(comb[2], comb[3]);
  const d4 = distSq(comb[0], comb[3]);

  if ( d1 === d3 && d2 === d4 && distSq(comb[1], comb[3]) === distSq(comb[0], comb[2])) {
    if (
      (comb[0][0] === comb[1][0] || comb[0][0] === comb[2][0] || comb[0][0] === comb[3][0]) 
      && 
      (comb[0][1] === comb[1][1] || comb[0][1] === comb[2][1] || comb[0][1] === comb[3][1])) return true;
  }  
}

const k_combinations = (set, k) => {                                          
  if (k > set.length || k <= 0) {                              
    return []                                                 
  }                                                                          
  if (k === set.length) {                                      
    return [set]                                            
  }                                                                          
  const combs = []                                                        
  if (k === 1) {                                               
    for (let i = 0; i < set.length; i++) {              
      combs.push([set[i]])                                   
    }                                                         
    return combs;                                              
  }                                                                             
  for (let i = 0; i < set.length - k + 1; i++) {                    
    const head = set.slice(i, i + 1)      
    const tailcombs = k_combinations(set.slice(i + 1), k - 1)        
    for (let j = 0; j < tailcombs.length; j++) {              
      combs.push(head.concat(tailcombs[j]))                    
    }            
  }                                                                             
  return combs;                                                               
}                                                                                     


const allCombs = k_combinations(points, 4)
  allCombs.forEach(comb => {
    if (isReq(comb)) return finalCount++;
    });
  return finalCount;  
}
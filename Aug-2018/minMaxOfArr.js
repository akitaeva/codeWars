// Write a function that returns both the minimum and maximum number of the given list/array.


function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)]; 
}
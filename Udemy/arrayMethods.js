/*
** | Array Methods
*/

/*
** | Array.map() 
** Map function applies passed function transformation to every element in the array 
** returns a new array w/ transformations applied
*/ 

let arr1 = [1,2,3,4,5];
//assign the map + it's function to a variable
let mappedArr = arr1.map(function(value) {
  return value * 10
}); //[10,20,30,40,50]

console.log(mappedArr);

/*
** | Array.filter() 
** Map function applies passed function transformation to every element in the array 
** returns a new array w/ transformations applied
*/ 


let filter = arr1.filter(function(value) {
    return value > 3
  })
  console.log('filter', filter)

/*
** | Array.reduce() 
** Reduce function combines all the elements in the array into one value using a passed transformational function
*/ 

let reduce = arr1.reduce(function(preval, currentVal, index, array){
    return preval + currentVal;
  });
  
console.log(reduce);

//above using a for loop

function sum(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
  
  console.log('sum', sum(arr1));




/*
** Data structures and algorithms 
** hepler functions - page 57
*/

/*
** | Array.slice
** = returns a portion of the array w/o modifying the array
*/

var array1 = [1,2,3,4,5];
let exampleSlice = array1.slice(1,2);
console.log('exampleSlice1', exampleSlice); // returns [2], var array1 remains = [1,2,3,4,5];

let exampleSlice2 = array1.slice(3,4);
console.log('exampleSlice2', exampleSlice2); //returns [4]

console.log(array1); //not modified

/*
** if nothing is passed - this array will return a copy of the array being sliced
** however - array1.slice() === array1 //returns false
** the memory addresses which those arrays reside is different

** Variables in JS are reference based meaning if you assign a variable to a new variable they will remain the same 
*/

let newArr = [5,4,3,2,1];
let newerArr = newArr;

console.log('newArr', newArr);
console.log('newerArr', newerArr);

newerArr[0] = 6;

console.log('newArrReassigned', newerArr); //will remain the same 

/* | Array.from
** to create an entirely new array not stored in reference, use array.from
** from takes O(n) - copying the array requires copying all n elements in the array
*/

let from = Array.from(newArr);
from[0] =6;
console.log('from', from); // [6,4,3,2,1]

/* | Array.splice(begin, size, element1, element2)
** this helper function modifies arrays by adding or removing existing elements 
** 1. beginning index
** 2. size of the things to be removed
** 3. new elements to be added
**
** it returns the removed elements 
** splice takes O(n)
*/

console.log(from.splice(0, 1, 5)); // returns the removed elements if logged
console.log(from) // [5,4,3,2,1]

/* | Array.concat
** adds new elements to the array at the end, and returns the array
*/

console.log('concat', from.concat()); //returns the array
let concatFrom = from.concat([0,-1, -2]);
console.log(concatFrom); // [5, 4, 3, 2, 1, 0, -1, -2]

/* | Array.length
** returns the size of the array
** changing property to lower size can delete elements
*/ 

console.log(concatFrom.length);
concatFrom.length =5;
console.log('trimmed concat from using length', concatFrom);


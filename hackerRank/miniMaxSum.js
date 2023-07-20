/*
    Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/

//this solution is more efficient and accurate
function miniMaxSum(arr) {
    let sum = arr.reduce((a, b) => {
      return a + b;
    });
    const min = sum - Math.max(...arr);
    const max = sum - Math.min(...arr);
    console.log('other solution', min + " " + max);
  }
  
miniMaxSum(array)

/*
    The above solution first calculates the total sum of all elements in the array using reduce. 
    Then, it finds the minimum and maximum elements in the array using Math.min and Math.max, respectively. 
    Finally, it calculates the minimum sum by subtracting the maximum element from the total sum, and the 
    maximum sum by subtracting the minimum element from the total sum. The results are then logged to the console.
*/

//this function is more long-winded, and less accurate
let removeMin = array.filter(ar => ar !== Math.min(...array));
console.log(removeMin);
let removeMax = array.filter(ar => ar !== Math.max(...array));

function filter(removeMin, removeMax) {
  //filter
  let totalRemoveMax = 0;
  let totalRemoveMin = 0;
  
  for(let j = 0; j < removeMin.length; j++) {
    totalRemoveMin += removeMin[j];
  }
  for(let i = 0; i < removeMax.length; i++) {
    totalRemoveMax += removeMax[i];
  }
  console.log('totalMax',totalRemoveMax);
  console.log('totalMin', totalRemoveMin);
}

filter(removeMin, removeMax);


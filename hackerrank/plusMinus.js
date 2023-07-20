//https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem

/*
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
*/

//solution
function plusMinus(arr) {
    let negative=[];
    let positive=[];
    let equalToZero=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            equalToZero.push(arr[i]);
        }
        if (arr[i] > 0) {
            positive.push(arr[i]);
        }
        if(arr[i] < 0) {
            negative.push(arr[i]);
        }
    }
    console.log(positive.length / arr.length);
    console.log(negative.length / arr.length);
    console.log(equalToZero.length / arr.length);
}


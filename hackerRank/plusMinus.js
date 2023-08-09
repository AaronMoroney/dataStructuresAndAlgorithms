//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true

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


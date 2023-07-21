let number = 15;
//console.log(array);

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //multiple of 3 & 5
    if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } 
    if(i % 3 === 0 && i % 5 !== 0) {
      console.log('Fizz')
    }
    if (i % 3 !== 0 && i % 5 === 0) {
      console.log('Buzz')
    }
    if (i % 3 !==0 && i % 5 !==0) {
      console.log(i)
    }
  }
}

fizzBuzz(number);
//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=internal-search


function breakingRecords(scores) {
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let highBreakCount = 0;
    let lowBreakCount = 0;
  
    for (let i = 1; i < scores.length; i++) {
      if (scores[i] > highestScore) {
        highestScore = scores[i];
        highBreakCount++;
      } else if (scores[i] < lowestScore) {
        lowestScore = scores[i];
        lowBreakCount++;
      }
    }
  
    return [highBreakCount, lowBreakCount];
  }
  
  let scores = [9, 10, 5, 20, 20, 4, 5, 2, 25, 1];
  let result = breakingRecords(scores);
  console.log(result[0], result[1]);
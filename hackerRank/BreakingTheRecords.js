/*
sample input: 9 10 5 20 20 4 5 2 25 1
The first line contains an integer , the number of games.
The second line contains  space-separated integers describing the respective 
values of the scores.

sample output:
2 4

She broke her best record twice (after games 2 and 7) and her worst record
four times (after games 1, 4, 6, and 8 ), 
so we print 2 4 as our answer. 
*/

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
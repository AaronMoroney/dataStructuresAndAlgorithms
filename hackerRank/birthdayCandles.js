let candles = [2,3,1,2,3,1,2,3,1,2,3];

function birthdayCakeCandles(candles) {
     let biggestCandle = Math.max.apply(null, candles); 
     let result = candles.filter((big) => big === biggestCandle);
     return result.length
}

birthdayCakeCandles(candles);


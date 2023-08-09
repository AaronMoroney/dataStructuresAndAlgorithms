//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true
function timeConversion(s) {
    let hour = Number(s.substring(0,2));
    let minutesSeconds = s.substring(2, s.length -2);
    if(hour === 12 && s.includes('AM')) {
      let morning = '00';
      return`${morning}${minutesSeconds}`;
    }
    if(hour !== 12 && s.includes('AM')) {
      return `${'0'}${hour.toString()}${minutesSeconds}`;
    }
    if (hour < 12 && s.includes('PM')) {
      let afternoon = 12 + hour;
      return`${afternoon.toString()}${minutesSeconds}`;
    }
    if (hour === 12 && s.includes('PM')) {
      return `${hour}${minutesSeconds}`
    }
  }
  
  console.log(timeConversion(string));

  
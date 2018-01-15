var talkingCalendar = function(date) {
  var year = Number(date[0]+date[1]+date[2]+date[3]);
  var day = Number(date[5]+date[6]);
  var month = Number(date[8]+date[9]);
  console.log(year, day, month);
}

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
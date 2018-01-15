var talkingCalendar = function(date) {
  var partDate = date.split('/');

  var mydate = new Date(partDate[2],partDate[0]-1,partDate[1]); 

  return mydate;
}

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));
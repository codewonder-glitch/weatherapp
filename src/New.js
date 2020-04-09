function today() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    let n=[];
  for(let i=0;i<7;i++)
  {
 n.push(weekday[d.getDay()+i]);
  }
 console.log("value of n is"+ n);
  }

  today();

  const birthday = new Date('2020-04-08');
const day1 = new Date('2020-04-08').getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
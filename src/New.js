function today() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[6] = "Sunday";
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    let n=[];
  for(let i=1;i<8;i++)
  {
      let y=d.getDay()+i;
      if(y>6){y=y-7;}
 n.push(weekday[y]);
  }
 console.log("value of n is", n);
  }

  today();

  const birthday = new Date('2020-04-08');
const day1 = new Date('2020-04-05').getDay();
// Sunday - Saturday : 0 - 6

console.log(day1);
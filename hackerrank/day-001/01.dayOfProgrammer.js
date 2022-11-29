// Problem : Day of the Programmer

function dayOfProgrammer(year = 2016) {
  // Write your code here
  let monthes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let leap = false,target = 256,dd,mm = 0,result = "";

  //check if year is leap
  if (year <= 1917) {
    leap = year % 4 == 0 ? true : false;
  } else {
    if (year % 400 == 0) leap = true;
    else if (year % 4 == 0 && year % 100 != 0) leap = true;
  }
  if(leap) monthes[1] = 29;

  //check if year 1918.
  if (year == 1918)monthes[1] -=13;

  monthes.forEach((item)=>{
    if(target-item > 0){
        mm++;
        target -=item;
    }
  });
  mm++;

  if(target < 10)
    dd = "0"+target.toString();
  else
    dd = target.toString();
 
  if(mm < 10)
    mm = "0"+mm.toString(); 

  result = dd+"."+mm+"."+year;
  return result;
}

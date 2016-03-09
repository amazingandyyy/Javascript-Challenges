// There is definitely a problem that comes up if you are using absolute
// values. Test a date that is 364 days from now ("a year from yesterday").
// Your function returns that it is one year and one day from now, when in
// fact it is one day less than a year.

// Write a JavaScript function that takes 3 arguments (year, month, and day) and calculates how many days between that day and today
//
// If the days are more than 30, return Y months, Z days
// If the months are more than 12, return X years, Y months, Z days
// Test Cases
//
// (Assuming today is April 2nd, 2015)
//
// age(2017, 11, 17) -> 2 years, 8 months, 15 days
// age(2015, 3, 6) -> 4 days
// Note that the month argument starts from 0 (11 is December)


// There is definitely a problem that comes up if you are using absolute
// values. Test a date that is 364 days from now ("a year from yesterday").
// Your function returns that it is one year and one day from now, when in
// fact it is one day less than a year.


function age(year, month, day) {

  var currentDate = new Date().getTime();
  var targetDate = new Date(year, month, day);

  // var dayDifference =  targetDate.getDate() - currentDate.getDate();
  var dayDifference =  Math.floor((targetDate - currentDate)/86400000); // 1000*60*60*24
  // var monthDifference = targetDate.getMonth() - currentDate.getMonth();
  // var yearDifference =  targetDate.getFullYear() - currentDate.getFullYear();
  var monthDifference = 0;
  var yearDifference =  0;

  if (dayDifference > 30) {
    monthDifference = parseInt(dayDifference / 30);

    if (monthDifference >= 12) {
      yearDifference = parseInt(monthDifference / 12);
      monthDifference = parseInt(monthDifference % 12);
    }

    dayDifference = parseInt(dayDifference % 30);
  }

  return yearDifference + " years" + " " + monthDifference + " months" + " " + dayDifference + " days";

}

// console.log(age(2015, 3, 2));
console.log(age(2017, 11, 17));

// age(2017, 11, 17)
// age(2015, 3, 6)



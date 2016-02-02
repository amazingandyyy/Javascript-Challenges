// There is definitely a problem that comes up if you are using absolute values. Test a date that is 364 days from now ("a year from yesterday"). Your function returns that it is one year and one day from now, when in fact it is one day less than a year.

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


function age(year, month, day) {

  var today = new Date();
  var targetDate = new Date(year, month, day);

  var days = Math.abs(today.getDate() - targetDate.getDate());
  var months = Math.abs(today.getMonth() - targetDate.getMonth());
  var years = Math.abs(today.getFullYear() - targetDate.getFullYear());

  return years + " years" + " " + months + " months" + " " + days + " days";
}

console.log(age(2016, 1, 2));
// console.log(age(2017, 11, 17));
// console.log(age(2015, 3, 6));

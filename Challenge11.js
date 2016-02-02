// There is definitely a problem that comes up if you are using absolute values. Test a date that is 364 days from now ("a year from yesterday"). Your function returns that it is one year and one day from now, when in fact it is one day less than a year.

function age(year, month, day) {

  var today = new Date();
  var targetDate = new Date(year, month, day);

  var days = Math.abs(today.getDate() - targetDate.getDate());
  var months = Math.abs(today.getMonth() - targetDate.getMonth());
  var years = Math.abs(today.getFullYear() - targetDate.getFullYear());

  return years + " years" + " " + months + " months" + " " + days + " days";
}

console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));

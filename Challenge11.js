function age(year, month, day) {

  var today = new Date(2015, 4, 2);
  var targetDate = new Date(year, month, day);

  var days = Math.abs(today.getDate() - targetDate.getDate());
  var months = Math.abs(today.getMonth() - targetDate.getMonth());
  var years = Math.abs(today.getFullYear() - targetDate.getFullYear());

  return years + " years" + " " + months + " months" + " " + days + " days";
}

console.log(age(2017, 11, 17));
console.log(age(2015, 3, 6));

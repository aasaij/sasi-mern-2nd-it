// let today = new Date("2024-02-21");
let today = new Date();
let day = today.getDay(); // day of the week (0-sun, 6-sat)
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = today.getMonth(); // month of the year
let year = today.getFullYear(); // century of the year
let dt = today.getDate(); // day of the month
let dayName = "";
switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
}
// document.write(`Today is ${dayName}`);
document.write(`${dayName},${months[month]} ${dt}, ${year}`);

//let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

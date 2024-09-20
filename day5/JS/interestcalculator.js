//Program to calculate compound interest
//Sequencial control structure
// let principal = 100000;
// let rate = 14.9;
// let years = 5;
// let interest;
// interest = principal * (1 + rate / 100) ** years - principal;
// console.log(interest.toFixed(2));
//Getting input from the user - Method 1

// let principal = Number(prompt("Principal Amount : "));
// let rate = Number(prompt("Rate of Interest : "));
// let years = Number(prompt("Number of years : "));
// let interest = principal * (1 + rate / 100) ** years - principal;
// document.write(
//   `<h1>Compound Interest :<span class='text-success'> ${interest.toFixed(
//     2
//   )}</span></h1>`
// );

function calculateInterest() {
  let p = document.getElementById("principal").value;
  let r = document.getElementById("rate").value;
  let t = document.getElementById("years").value;
  let interest = p * (1 + r / 100) ** t - p;
  document.getElementById("result").value = interest.toFixed(2);
}

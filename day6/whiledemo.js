/*
while(<condition>){
    <statements>
}
*/
function greet(user) {
  document.write(`<h1> Good Morning ${user}`);
}
let names = [
  "Rishi",
  "Santhosh",
  "Suresh",
  "Banvitha",
  "Hema",
  "Venu",
  "Renu",
  "Chandrika",
  "Pretty Prema",
  "Varsha",
  "Lakshmi",
];
let index = 0;
// while (index < names.length) {
//   greet(names[index]);
//   index++; // Increment index to move to the next element in the array
// }
do {
  greet(names[index]);
  index++; // Increment index to move to the next element in the array
} while (index < names.length);

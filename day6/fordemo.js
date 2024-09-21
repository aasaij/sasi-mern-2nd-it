//Creating 100 buttons
// for (let i = 1; i <= 100; i++) {
//   document.write(`<button>${i}</button>`);
// }
var total = 100; //Global variable
function forDemo() {
  let list = [
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
    "Maha Nagalakshmi",
  ];

  //for statement
  //   for (var index = 0; index < list.length; index++) {
  //     document.write(`<button>${list[index]}</button>`);
  //   }
  //   console.log(index);
  //for ... in statement
  //   for (let index in list) {
  //     document.write(`<button>${list[index]}</button>`);
  //   }
  //for..of statement
  //   for (let name of list) {
  //     if (!name.includes("a")) continue;
  //     document.write(`<button>${name}</button>`);
  //   }
  for (let name of list) {
    if (!name.includes("a")) break;
    document.write(`<button>${name}</button>`);
  }
}

forDemo();

// functions
// 1. pre-defined or built-in or library functions
// 2. user-defined functions

//function definition
// function greet(user) {
//   console.log(`Good Afternoon ${user}`);
// }

let sum = function (x, y, z) {
  return x + y + z;
};

// function minus(x,y){
//     return x - y;
// }
//arrow functions
//anonymous functions
let minus = (x, y) => x - y;
let greet = (user) => console.log(`Good Afternoon ${user}`);

let wishMe = greet;

//function call
greet("Pretty Prema");
greet("Rishi");
greet("Bavani");
wishMe("Venu");
wishMe("Shiny");
console.log(sum(10, 20, 30));
console.log(minus(100, 200));

// greet();
// greet();

//bigint
let x = 123456789123456789123456789n;
let y = BigInt("123456789123456789123456789");
console.log(x, y);

//number
let a = 0o10; //Octal number
a = 0b1010; //Binary number
a = 0x10; //Hexadecimal number
a = 10.5e5; //exponential number
a = 10.5e5;
a = 10.5e-5;

console.log(a);
// let b = 10.5

Control structures
1. Sequential 

2. Selective
    if
        if(<condition>){
            <statements>
        }
        else if(<condition>){
            <statements>
        }
        else{
            <statements>
        }

    switch
3. Iterative
    for  --> 4 types
    while
    do..while

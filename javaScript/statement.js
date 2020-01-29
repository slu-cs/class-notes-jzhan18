// Statement syntax in JavaScript
// VM cs-linuxlab-20
// constant
const pi = 3.14;

// Printing
console.log(pi);

// for loop
for (let x = 0; x < 3; x++) {
  console.log(x);
}

// while loop
let x = 0;
while (x < 3) {
  console.log(x);
  x +=1;
}

// conditional
if (x === 3) {
  console.log('x is now 3');
} else {
  console.log(`x is now ${x}`);
}

// change
console.log('Now it prints this.');
let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += (i + 1) ** 2;
}
console.log(sum);

let fib = 0;
let fib1 = 1;
let fib2 = 0;
while (fib <= 1000) {
  fib2 = fib + fib1
  fib = fib1;
  fib1 = fib2;
}
console.log(fib2);

// swap variable with temp, without temp, with destructuring
let first = 5;
let second = 7;
console.log(first, second);

// approach 1: with temp
const temp = first;
first = second;
second = temp;
console.log(first, second);

// approach 2: Destructuring
[ first, second ] = [ second, first ];
console.log(first, second);
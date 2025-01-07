function foo(a, b) {
  // Explicit type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Invalid input: both arguments must be numbers';
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: 'Invalid input: both arguments must be numbers'
console.log(foo(1, 1)); // Output: 2

// Alternative solution using parseInt:
function foo2(a, b) {
  return parseInt(a) + parseInt(b);
}
console.log(foo2(1, '1')); // Output: 2
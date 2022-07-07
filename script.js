var i;
var fib = [0, 1]; 

for (i = 2; i <= 10; i++) {
 
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
console.log('o numero informado é 13');
console.log('o numero informado pertence ao fibonacci');
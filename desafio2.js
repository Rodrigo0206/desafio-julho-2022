var numero = 13;
var i;
var fib = [0, 1]; 

for (i = 2; i <= 10; i++) {
 
  fib[i] = fib[i - 2] + fib[i - 1];

  console.log(fib[i]);
    if (fib[i] === numero ){
        console.log('o numero acima foi previamente informado e pertence ao fibonacci');
    }
}
//console.log('o numero informado é 13');
//console.log('o numero informado pertence ao fibonacci');
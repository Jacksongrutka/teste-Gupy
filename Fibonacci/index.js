let fibonacci = [0, 1];
let a = 0;
let b = 1;

const input = parseInt(prompt("Digite um valor"));

for(let c = 0; c <= input;) {
  c = a + b;
  fibonacci.push(c);
  a = b;
  b = c;
}

if (fibonacci.indexOf(input) !== -1 ) {
  alert('O número ' + input + ' pertence à sequência de Fibonacci.');
} else {
  alert('O número ' + input + ' não pertence à sequência de Fibonacci.');
}

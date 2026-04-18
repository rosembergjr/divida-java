const entrada = require("readline-sync");

// Entrada de dados
let nome = entrada.question("Digite seu nome: ");
let valorDivida = Number(entrada.question("Digite o valor da divida: "));
let diasAtraso = Number(entrada.question("Digite os dias de atraso: "));

// Variáveis
let juros = 0;
let valorJuros = 0;
let totalDivida = 0;

// Estrutura condicional
if (diasAtraso <= 15) {
    juros = 5;
} else if (diasAtraso <= 30) {
    juros = 10;
} else {
    juros = 15;
}

// Cálculo
valorJuros = (valorDivida / 100) * juros;
totalDivida = valorDivida + valorJuros;

// Saída
console.log("\n--- RESULTADO ---");
console.log(`Nome: ${nome}`);
console.log(`Valor da dívida: R$ ${valorDivida}`);
console.log(`Dias de atraso: ${diasAtraso}`);
console.log(`Taxa de juros: ${juros}%`);
console.log(`Valor dos juros: R$ ${valorJuros}`);
console.log(`Total da dívida: R$ ${totalDivida}`);
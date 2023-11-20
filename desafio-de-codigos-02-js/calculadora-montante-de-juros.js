// lista 02 (ex 05 - Calculadora de Montante com Juros)

//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const contaBancaria = {
    investimentoInicial: parseFloat(gets()),
    taxaJurosMensal: parseFloat(gets()),
    periodoMeses: parseInt(gets()),
};

// TODO: Calcule a taxa de juros mensal em formato decimal (0 a 1) a partir da taxa percentual fornecida:
// aqui se faz necessário dividir a taxa de juros por 100
const taxaJurosDecimal = contaBancaria.taxaJurosMensal / 100;
// function calcularTaxaDeJuros(){
//     return contaBancaria.taxaJurosMensal / 100;  
// }

// TODO: Calcule o montante (valor total após o investimento) usando a fórmula de juros compostos.
// A fórmula de juros compostos é: M = C * (1 + r)^n
// onde: M é o montante | C é o capital inicial | r é a taxa de juros | n é o número de períodos
const montante = contaBancaria.investimentoInicial * Math.pow((1 + taxaJurosDecimal), contaBancaria.periodoMeses);
// let montante
// function calcularMontante() {
//     return montante = contaBancaria.investimentoInicial * Math.pow((1 + calcularTaxaDeJuros()), contaBancaria.periodoMeses);
// }

// É impresso informações sobre o investimento:
print("Investimento: " + contaBancaria.investimentoInicial.toFixed(2));
print("Juros: " + contaBancaria.taxaJurosMensal);
print("Período: " + contaBancaria.periodoMeses);
print("Resultado: " + montante.toFixed(2));
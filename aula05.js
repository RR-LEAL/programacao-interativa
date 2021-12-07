/* 1) Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros. */
function convertpol(pol) {
  return pol * 2.54;
}
console.log(convertpol(5));

/* 2) Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */

function converURL(url) {
  return 'http://www.' + url + '.com.br';
}
console.log(converURL('google'));

/* 3) Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ). */

function msg(frase) {
  return frase + '!';
}
console.log(msg('Hello, world'));

/* 4) Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.*/

function calcCao(idadeCao) {
  return idadeCao * 7;
}
console.log(calcCao(1));

/* 5)Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
PS: considere que você trabalhe 160 horas no mês. */

function valorHora(salario) {
  return salario / 160;
}
console.log(valorHora(500));

/* 6) Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. 
Em seguida, execute a função, testando diferentes valores. 
*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura. */

function calcIMC(altura, peso) {
  return peso / (altura * altura);
}
console.log(calcIMC(1.62, 54));

/* 7) Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz. */

function upper(string) {
  return string.toUpperCase();
}
console.log(upper('lucas'));

/* 8) Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz. */

function dataType(data) {
  return typeof data;
}
console.log(dataType('study'));

/* 9) Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi. */

function circ(raio) {
  return 2 * Math.PI * raio;
}
console.log(circ(10));
const nome = 'José'
const sobrenome = ' da Silva'
let idade = 27
let peso = 83.5
let altura = 1.7
let plano = 'ouro'

let imc = peso / (altura * altura);
let imcExibir = imc.toFixed(2);

let mensagem =
  nome +
  sobrenome +
  ' tem ' +
  idade +
  " anos " +
  ' e seu índice de massa corporal é de ' +
  imcExibir

console.log(mensagem)

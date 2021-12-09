//Métodos String
let nome = " Marcos Santana ";

console.log( nome.length );//retorna a quantidade

console.log ( nome.trim() ); //retira os espaços vazios (não altera a variável original)
let nome2 = nome.trim();
console.log( nome.split(" ") ); //quebra a string (o que entra no parentese é o que vale de regra na hora de quebrar), transforma em um array

//Métodos Array
let nomes = ["Marcos", "Bruno", "Glauber", "Ruggiero"];
console.log( nomes.length );
nomes.push("Fulano", "Ciclano"); //adiciona novos valores no final do array
console.log( nomes );
console.log( nomes.length );

let ultimoValor = nomes.pop(); //pop retira o último elemento do array
console.log(nomes);
console.log(ultimoValor);

let primeiroValor = nomes.shift(); //.shift retira o primeiro elemento do array
console.log(nomes);
console.log(primeiroValor);

nomes.unshift(ultimoValor); //adiciona um valor no início do array
console.log(nomes);

let strNomes = nomes.join(" - "); 
console.log(strNomes);

let y = nomes.lastIndexOf("Ruggiero"); //pega o elemento percorrendo o array de trás pra frente
console.log(y);

let x = nomes.includes("Ruggiero");  
console.log(x);
nomes [2] = "Bruno Barreto" //altera a posição específica do array
console.log( nomes [2]); //acessar um elemento específico do array
console.log( nome [2] == nomes [2] ); // compara dos arrays
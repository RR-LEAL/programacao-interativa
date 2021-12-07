// Loop de pares
let loopDePares = ((numero) => {
    for (let index = 0; index <= 100; index++) {
      console.log(index);
      if ((index + numero)%2 == 0) {
        console.log('O número é '+(index+numero)+' par.');   
    }
  }    
});

loopDePares(1);

// Loop de impares com palavras
let loopDeImpares = ((numero, palavra) => {
  for (let index = 0; index <= 100; index++) {
    console.log(index);
    if ((index + numero)%2 != 0) {
      console.log(palavra);   
  }
}    
});

loopDeImpares(1, 'gato');

//Soma
let soma = ((numero) => {
  let auxiliar = 0;
  for (let index = 1; index <= numero; index++) {
    auxiliar = ;
    
  }
})
//.map()
let numeros = [1,2,3,4];
let dobro = numeros.map(function(item){ //map cria uma nova função em função de uma já existente//
  console.log(item);
  return item * 2;
});
console.log(dobro);

//.filter()
let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(function(item){ //.filter ele faz uma varredura em todo o array//
  return item >=17;
});
console.log(maiores);

//reduce()
let soma = numeros.reduce(function(acumulador, item) {
    // console.log(acumulador, item);
    return acumulador+''+ item;
});
console.log(soma);

//.forEach()
idades.forEach(function (item) {
  console.log("olá item "+item);
});
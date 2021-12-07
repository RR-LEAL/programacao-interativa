// objeto literal
let carro = {
    marca: "ford",
    modelo: "mustang",
    andar: function (){
      return "carro "+this.modelo+" andando";
    }
};
console.log(carro.andar);

// função contrutora
function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

let carroNovo = new Carro("Tesla", "x");

console.log(carroNovo);

// JSON

let  dadosCarro = {
    "cor":"vermelho",
    "marca":"ford",
    "placa":"FEE-95F4",
    "qtdPortas" : 4
}

console.log(dadosCarro);
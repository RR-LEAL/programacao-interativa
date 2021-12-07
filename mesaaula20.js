const arquivos = [
  {
      "sexo": "F",
      "nome": "Abigael Natte",
      "altura": 1.61,
      "idade": 50,
      "opiniao": "1"
  
  },
  {

      "sexo": "M",
      "nome": "Ramon Connell",
      "altura": 1.75,
      "idade": 45,
      "opiniao": "3"

  },
  {

      "sexo": "M",
      "nome": "Jarret Lafuente",
      "altura": 1.55,
      "idade":30,
      "opiniao": "1"

  },
  {

      "sexo": "F",
      "nome": "Ansel Ardley",
      "altura": 1.67,
      "idade": 28,
      "opiniao": "1"

  },
  {

      "sexo": "F",
      "nome": "Jacki Shurmer",
      "altura": 1.75,
      "idade": 25,
      "opiniao": "2"

  },
  {

      "sexo": "M",
      "nome": "Jobi Mawtus",
      "altura": 1.88,
      "idade": 34,
      "opiniao": "1"

  },
  {

      "sexo": "M",
      "nome": "Thomasin Latour",
      "altura": 1.67,
      "idade": 25,
      "opiniao": "3"

  },
  {

      "sexo": "F",
      "nome": "Lonnie Verheijden",
      "altura": 1.63,
      "idade": 30,
      "opiniao": "3"

  },
  {

      "sexo": "M",
      "nome": "Alonso Wannan",
      "altura": 1.92,
      "idade": 25,
      "opiniao": "2"
  },
  {

      "sexo": "F",
      "nome": "Bendite Huggett",
      "altura": 1.80,
      "idade": 45,
      "opiniao": "2"
  }
]

// a média das idades das pessoas que responderam ótimo;

function mediaQuestionario(pessoas) {
  let quantidadeBom = 0;
  let somaBom =0;
  
  
  for (i=0; i < pessoas.length; i++) {
          if (pessoas[i].opiniao==="3" ){
          somaBom += pessoas[i].idade
          quantidadeBom++// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

      function porcentagemBom(pessoas) {
        let quantidadeBom = 0;
        let quantidadePessoas = 0;
        for (i=0; i< pessoas.length; i++) {
          quantidadePessoas++

         if (pessoas[i].opiniao==="2"){
             quantidadeBom++
          }
        }
        return (quantidadeBom/quantidadePessoas)*100;
    
      }
    }
  }

  return somaBom / quantidadeBom;
 
}

console.log(mediaQuestionario(arquivos));

// a quantidade de pessoas que responderam regular;

function quantidadeRegular(pessoas) {
  let quantidadeRegular = 0;
  for (i=0; i< pessoas.length; i++) {
      if (pessoas[i].opiniao==="1"){
          
          quantidadeRegular++
      }
  }
  return quantidadeRegular;
  
}

console.log(quantidadeRegular(arquivos));

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

function porcentagemBom(pessoas) {
  let quantidadeBom = 0;
  let quantidadePessoas = 0;
  for (i=0; i< pessoas.length; i++) {
      quantidadePessoas++

      if (pessoas[i].opiniao==="2"){
                               
          quantidadeBom++
      }
  }
  return (quantidadeBom/quantidadePessoas)*100;
  
}

console.log(porcentagemBom(arquivos) +"%");
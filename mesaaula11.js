let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"];
let filmes2 = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];

    function converterMaisculas(vetor){
        for (let i = 0; i < vetor.length; i++){  
              console.log(vetor[i].toUpperCase());
        }
    }
        
        converterMaisculas(filmes);
    
    
    function juncaoDeArray(vetor, vetor2) {
      
      let invalido = vetor.pop();
      let tamanho = vetor2.length;
      
      for (let i = 0; i < tamanho; i++){
        vetor.push(vetor2.pop());
      }
    }
    
    console.log("esse filme é invalido: ", invalido);
    juncaoDeArray(filmes, filmes2);
    console.log(filmes);
    
    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
    const europaScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

    function compararClassicacao(asia, europa) {
      let comparacoesAsiaEuropa = [];
      for (let i = 0; i < asia.length; i++) {
        comparacoesAsiaEuropa[i] = asia[i] === europa[i];
      }

      return comparacoesAsiaEuropa;
    }

    console.log (compararClassicacao(asiaScores, europaScores));
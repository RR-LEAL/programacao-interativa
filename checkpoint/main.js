let listaEstudantes = JSON.parse(require("./listaEstudantes"));
let Aluno = require("./aluno")


function Curso(nomeDoCurso, notaApr, faltaMax, listaAlunos = []) {

  this.nomeDoCurso = nomeDoCurso;
  this.notaApr = notaApr;
  this.faltaMax = faltaMax;
  this.listaAlunos = listaAlunos;

  this.addAluno = (nome, qtdFaltas, notas) => {
    this.listaAlunos.push(new Aluno(nome, qtdFaltas, notas))
  };


  this.aprovado = (nome) => {
    let aluno = this.listaAlunos.find((procuraAluno) => procuraAluno.nome === nome);

    if ((aluno.media >= this.notaApr && aluno.qtdFaltas < this.faltaMax) ||
    (aluno.qtdFaltas === this.faltaMax &&
      aluno.media >= this.notaApr * 1.1)) {
        return `aluno ${aluno.nome} foi aprovado`
      } else {
        return `aluno ${aluno.nome} foi aprovado`
      }
  }

  this.listaAprovados = () => {
    return this.listaAlunos.map((item) => {
      return (
        (item.media >= this.notaApr && item.qtdFaltas < this.faltaMax) || 
        (item.qtdFaltas === this.qtdFaltas && item.media >= this.notaApr * 1.1)
      );
    });
  };

};

adicionarEstudante = (lista, nome) => {
  for (i = 0; i < lista.length; i++) {
    curso.addAluno(lista[i].nome, lista[i].qtdFaltas, lista[i].notas);
  }
  return curso;
 
}

let curso = new Curso("ctd", 8, 4);
adicionarEstudante(listaEstudantes, curso);

console.log(curso);

console.log(curso.aprovado("rodrigo rodrigues"));
console.log(curso.listaAprovados());
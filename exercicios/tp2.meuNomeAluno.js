// Meu Nome

function questao1() {
  let qtd = 0
  for(let i = 1; i < 1000000; i++){
    if(i % 2 === 0 && i % 3 === 0){
      qtd++
    }
  }
  console.log(qtd)
}

function questao2() {
  let inicio = Math.floor(new Date().getTime())
  // 53!

  let resultado = 1
  for(let i = 1; i <= 53; i++){
    resultado *= i
  }

  let fim = Math.floor(new Date().getTime())
  let total = fim - inicio
  console.log(total, 'em segundos', 'resultado', resultado)
}

function questao3() {
  let qtd_alunos = 19
  let aprovados = 0
  let alunos = []
  for(let i = 1; i <= qtd_alunos; i++){
    let aleatoria =  Math.floor(Math.random() * 100)
    let situacao
    if(aleatoria < 60){
      situacao = 'reprovado'
    } else {
      situacao = 'aprovado'
      aprovados++
    }
    let aluno = {nr: i % 5, nota: aleatoria, situacao: situacao}
    alunos.push(aluno)
    console.log(`Aluno ${aluno.nr} Nota ${aluno.nota} [${aluno.situacao.toUpperCase()}]`)
  }

  let reprovados = qtd_alunos - aprovados
  let p_aprovado = (aprovados / qtd_alunos) * 100
  let p_reprovado = (reprovados / qtd_alunos) * 100

  console.log(`APROVADOS: ${aprovados} (${p_aprovado.toFixed()}%) | REPROVADOS: ${reprovados} (${p_reprovado.toFixed()}%)`)


  // for calcular reprovacao

  // relatorio

  // para cada aluno --->   Nota yy [(A/RE)PROVADO]"
  // no final "APROVADOS: XX (xx%) | REPROVADOS: YY (yy%)"
}

function questao4() {
  let numeros = []
  let tentativas = 0;

  while(numeros.length < 1000){
    tentativas++;
    let aleatorio = Math.floor(Math.random() * 1000)

    if(numeros.includes(aleatorio) === false){
      numeros.push(aleatorio)
    }
  }
  numeros.sort((x, y ) => x - y )
  console.log(tentativas)
}


function questao5() {

  function tipoTriangulo(a, b, c) {
    if(a === b && b === c){
      return 'equilatero'
    }
    if(a !== b && b !== c && c !== a){
      return 'escaleno'
    }
    return 'isoceles'
  }

  console.log(tipoTriangulo(5, 5, 5))
  console.log(tipoTriangulo(45,45,90))
  console.log(tipoTriangulo(25, 35, 45))
}


questao1()
questao2()
questao3()
questao4()
questao5()


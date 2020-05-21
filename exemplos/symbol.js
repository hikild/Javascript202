let alunos = []

let notas_scretas = {}

for (let i = 0; i < 10; i ++){

  let nota = Math.floor(Math.random() * 100)
  let ns = Symbol()
  notas_scretas[ns] = nota

  alunos.push({aluno: i, nota: ns})
}

// volta da nota
notas_scretas[alunos[0].nota]





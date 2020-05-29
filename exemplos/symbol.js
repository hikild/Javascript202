let alunos = []

let notas_scretas = {}

for (let i = 0; i < 10; i ++){

  let nota = Math.floor(Math.random() * 100)
  let ns = Symbol('chave')
  notas_scretas[ns] = nota

  alunos.push({aluno: i, nota: ns})
}

print(alunos) // nao deve exibir as notas

// volta da nota
notas_scretas[alunos[0].nota]

let mapa = {}
let colecao = []
for (let i = 0; i < 20; i++) {

  let obj = {}

  for (let j = 0; j < 3; j++) {
    let num = Math.ceil(Math.random() * 1000)
    let ref = Symbol()
    mapa[ref] = num

    obj['a' + j] = ref
  }

  colecao.push(obj)
}
console.log(colecao)

let posicao = 10
console.log(mapa[colecao[posicao].a1])



let obj = {
  alunos : [
    {nome: 'Ezequiel', nota: 9},
    {nome: 'Joao', nota: 9}
  ]
}

let serializado = JSON.stringify(obj)
localStorage.setItem('chave', serializado)

// recuperando

let serializado_obtido = localStorage.getItem('chave')
let obj_obtido = JSON.parse(serializado_obtido)

console.log(obj_obtido.alunos[0].nome)

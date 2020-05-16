
function simples(obj1, obj2, obj3){
  let nome = obj1.nome
  let rua = obj2.logradouro
  let saldo = obj3.saldo
  console.log(nome, rua, saldo)
}
function simplesDeLares(obj){
  let nome = obj.pessoa.nome
  let rua = obj.endereco.logradouro
  let saldo = obj.conta.saldo
  console.log(nome, rua, saldo)
}

function simplesDestruida({nome}, {logradouro}, {saldo}) {
  console.log(nome, logradouro, saldo)
}

function simplesDestuidoraDeLares(
  {pessoa:{nome}, endereco:{logradouro:rua}, conta:{saldo} }){
    console.log(nome, rua, saldo)
}

// vao ver com muita frenquencia em codigos por ai
function popular({pessoa, endereco, conta}){
  console.log(pessoa.nome, endereco.logradouro, conta.saldo)
}

let pessoa = {nome: 'ezequiel', nacionalidade: 'brasileiro'}
let endereco = {logradouro: 'av pycharm', bairro: 'intellij'}
let conta = {saldo: 10}

({nome} = pessoa)
console.log(nome)

simples(pessoa, endereco, conta)
simplesDestruida(pessoa, endereco, conta)

let registro = {
  pessoa: pessoa,
  endereco: endereco,
  conta: conta,
}

let registroConstruido = {pessoa, endereco, conta}
// registro === registroConstruido

simplesDestuidoraDeLares(registroConstruido)
simplesDeLares(registroConstruido)
popular(registroConstruido)



let professor = {nome: 'ezequiel', a:1, faculdade: 'infnet' }
let turma = {classe: 'javascript', a:2, ano: 2020, horario: 'norturno'}

//
Object.assign(professor, turma)
// ou
let r = {...professor, ...turma}

let resultado = {
  nome: 'ezequiel',
  faculdade: 'infnet',
  classe: 'javascript',
  ano: 2020,
}

// region trocando
let a = 10
let b = 20

// tradicional
let temp = a
a = b
b = temp

// python
// a, b = b, a

[a, b] = [b, a]

// endregion

// region distruindo um array (lista)
let lista = [20, 30, 40, 5, 6, 7]

// tradicional
// let d = lista[0]
// let e = lista[1]
// let f = lista[2]

let [d, e, f] = lista

function f1([g, h, i]) {
  console.log(g, h, i)
}
f1(lista)
// endregion










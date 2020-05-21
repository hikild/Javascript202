// tradicional
function Carro(nome, fabricacao) {
  let _nome = nome
  let _fabricacao = fabricacao

  this.exibicao = function () {
    return `${_nome} / ${_fabricacao}`
  }

  this.getNome = function () {
    return _nome
  }

  this.getFabricacao = function () {
    return _fabricacao
  }
}

/* region java e c#

class MotoCsharpJava {
  // > 3.5
  public nome {get; set}

  // 2.0
  private _nome;
  public nome {
    get { return _nome }
    set { _nome = value }
  }

  // moto.nome
  // moto.nome = "CG"

  // java
  private _nome;
  public getNome(){
    return _nome
  }
  public setNome(value){
    this._nome = value
  }

  // moto.getNome()
  // moto.setNome("CG")
}
*/


// es6
class Moto {
  #variavelPrivada = 0

  get nome() {
    return this._nome
  }
  set nome(value) {
    this._nome = value
  }

  // moto.nome
  // moto.nome = "CG"

  get fabricacao() {
    return this._fabricacao
  }

  set fabricacao(value) {
    this._fabricacao = value
  }

  constructor(nome, fabricacao) {
    this._nome = nome
    this._fabricacao = fabricacao
  }

  getNome() {
    return this._nome
  }

  setNome(value) {
    this._nome = value
  }
  // moto.getNome()
  // moto.setNome("CG")

  getFabricacao() {
    return this._fabricacao
  }

  setFabricacao(value) {
    this._fabricacao = value
  }

  static fazAlgo(){

    console.log(this.nome)
    console.log(this._nome)
  }

}

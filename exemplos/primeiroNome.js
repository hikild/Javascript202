function primeiroNome(valor) {
  let posicao_espaco = valor.indexOf(' ')
  return valor.substring(0, posicao_espaco)
}
console.log(primeiroNome('ezequiel bertti'))

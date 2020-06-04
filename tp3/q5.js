"use strict"


let criarComponentes5 = function () {
  let $pai = document.querySelector('#q5')

  let $form = criarEl('div', null, $pai, {className: 'container mb-4'})
  criarEl('h1', 'Questão 5', $form,)
  let $ladoA = criarCampo('Lado A', $form, 'number')
  let $ladoB = criarCampo('Lado B', $form, 'number')
  let $ladoC = criarCampo('Lado C', $form, 'number')
  let $botao = criarEl('button', 'calcular', $form, {className: 'btn btn-success btn-block'})

  $botao.addEventListener('click', () => {

    function tipoTriangulo(a, b, c) {
      if (a === b && b === c) {
        return 'equilatero'
      }
      if (a !== b && b !== c && c !== a) {
        return 'escaleno'
      }
      return 'isoceles'
    }

    let ladoA = parseInt($ladoA.value)
    let ladoB = parseInt($ladoB.value)
    let ladoC = parseInt($ladoC.value)

    let resultado = tipoTriangulo(ladoA, ladoB, ladoC)
    exibirResultado(resultado, $pai)
  })

}
window.componentes.push(criarComponentes5)

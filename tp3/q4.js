"use strict"


let criarComponentes4 = function () {
  let $pai = document.querySelector('#q4')

  let $form = criarEl('div', null, $pai, {className: 'container mb-4'})
  criarEl('h1', 'Questão 4', $form,)
  let $qtd = criarCampo('quantidade de numeros', $form, 'number')
  let $minimo = criarCampo('valor minimo', $form, 'number')
  let $maximo = criarCampo('valor maximo', $form, 'number')
  let $botao = criarEl('button', 'calcular', $form, {className: 'btn btn-success btn-block'})

  $botao.addEventListener('click', () => {

    let qtd = parseInt($qtd.value)
    let minimo = parseInt($minimo.value)
    let maximo = parseInt($maximo.value)
    let diferenca = maximo - minimo

    if(diferenca < qtd){
      alert('a diferença deve ser maior que quantidade de numeros')
      return
    }

    let numeros = []
    let tentativas = 0

    while (numeros.length < qtd) {
      tentativas++
      let aleatorio = Math.floor(Math.random() * diferenca) + minimo
      if (numeros.includes(aleatorio) === false) {
        numeros.push(aleatorio)
      }
    }
    numeros.sort((x, y) => x - y)

    exibirResultado(`tentativas: ${tentativas}`, $form)
  })
}
window.componentes.push(criarComponentes4)

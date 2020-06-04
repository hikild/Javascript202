"use strict";


let criarComponentes2 = function (){
  let $pai = document.querySelector('#q2')
  let $form = criarEl('div', null, $pai, {className: 'container mb-4'})

  criarEl('h1', 'Questão 2', $form, )
  let $fatorialDe = criarCampo('Calcular o fatorial de', $form, 'number')

  let $botao = criarEl('button', 'calcular', $form, {className: 'btn btn-success btn-block'})

    $botao.addEventListener('click', () => {
      let inicio = Math.floor(new Date().getTime())
      // 53!
      let valor = parseInt($fatorialDe.value)
      let resultado = 1
      for(let i = 1; i <= valor; i++){
        resultado *= i
      }

      let fim = Math.floor(new Date().getTime())
      let total = fim - inicio
      exibirResultado(`${total}, em milésimos resultado ${resultado}`, $form)
    })

}
window.componentes.push(criarComponentes2)

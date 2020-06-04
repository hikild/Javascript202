"use strict";

function criarEl(tipo, texto, $pai, extra){
  let $el = document.createElement(tipo);
  if(texto){
    $el.innerText = texto
  }
  if($pai){
    $pai.append($el)
  }

  for(let chave in extra){
    $el[chave] = extra[chave]
  }
  return $el
}
window.criarEl = criarEl

function criarCampo(nome, $pai, tipo){
  let $div = criarEl('div', null, $pai, {className: 'form-group'})
  criarEl('label', nome, $div, )
  let $input = criarEl('input', null, $div, {className: 'form-control', 'type': tipo})
  $pai.append($div)
  return $input
}
window.criarCampo = criarCampo

function exibirResultado(resultado, $pai){
  if(!$pai._resultado){
    $pai._resultado = criarEl('div', '', $pai, {className: 'alert alert-primary mt-2'})
  }
  if($pai._apagar){
      clearTimeout($pai._apagar)
  }
  $pai._resultado.innerText = resultado

  $pai._apagar = setTimeout(() => {
    $pai._resultado.remove()
    $pai._resultado = null
  }, 5000)
}
window.exibirResultado = exibirResultado

let criarComponentes1 = function (){
  let $pai = document.querySelector('#q1')

  let $form = criarEl('div', null, $pai, {className: 'container mb-4'})
  criarEl('h1', 'Questão 1', $form, )
  let $minimo = criarCampo('valor minimo', $form, 'number')
  let $maximo = criarCampo('valor maximo', $form, 'number')
  let $botao = criarEl('button', 'calcular', $form, {className: 'btn btn-success btn-block'})

  $botao.addEventListener('click', () => {
    let minimo = parseInt($minimo.value)
    let maximo = parseInt($maximo.value)
    if(minimo >= maximo){
      alert('erro: não é aceito minimo maior ou igual ao maximo')
      return
    }
    let qtd = 0
    for (let i = minimo; i < maximo; i++) {
      if (i % 2 === 0 && i % 3 === 0) {
        qtd++
      }
    }
    exibirResultado(qtd, $form)
  })
}

window.componentes.push(criarComponentes1)

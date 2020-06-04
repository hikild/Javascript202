"use strict"

function telaLogin($pai) {
  limpar($pai)
  let $login = criarCampo('Login', $pai)
  let $senha = criarCampo('Senha', $pai, {type: 'password'})
  let $signin = criarEl('button', 'sign in ', $pai, {className: 'btn btn-success mx-2'})
  let $signup = criarEl('button', 'sing up', $pai, {className: 'btn btn-info mx-2'})

  $signin.addEventListener('click', () => {
    let senha_salva = localStorage.getItem($login.value)
    if (!senha_salva) {
      alert('usuario nao existe')
      return
    }
    if (senha_salva !== $senha.value) {
      alert('senha nao confere')
      return
    }

    telaLogado($pai)
  })

  $signup.addEventListener('click', () => {
    let senha_salva = localStorage.getItem($login.value)
    if(senha_salva){
      alert('usuario já existe')
      return
    }
    localStorage.setItem($login.value, $senha.value)
    alert('usuario criado')
  })

}

function telaLogado($pai) {
  limpar($pai)

  criarEl('h3', 'Logado', $pai,)
  let $sair = criarEl('button', 'Sair', $pai, {'className': 'btn btn-warning btn-block'})

  $sair.addEventListener('click', function () {
    telaLogin($pai)
  })
}

function limpar($conteudo) {
  while ($conteudo.hasChildNodes()) {
    $conteudo.lastChild.remove()
  }
}


let criarComponentes6 = function () {
  let $pai = document.querySelector('#q6')

  let $form = criarEl('div', null, $pai, {className: 'container mb-4'})
  criarEl('h1', 'Questão 6', $form,)
  let $conteudo = criarEl('div', '', $form)

  telaLogin($conteudo)

}
window.componentes.push(criarComponentes6)

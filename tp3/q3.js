"use strict"

let mapa = {}

class Aluno {
  constructor(numero) {
    this.nr = numero
    let aleatoria = Math.floor(Math.random() * 100)
    this._nota = Symbol()
    mapa[this._nota] = aleatoria
  }

  get nota() {
    return mapa[this._nota]
  }

  get situacao() {
    if (this.nota < 60) {
      return 'reprovado'
    }
    return 'aprovado'
  }
}

let criarComponentes3 = function () {
  let $pai = document.querySelector('#q3')
  let $form = criarEl('div', null, $pai, {className: 'container mb-4'})
  criarEl('h1', 'Questão 3', $form,)

  let $botao = criarEl('button', 'criar relatorio', $form, {className: 'btn btn-success btn-block'})

  let $table = null
  let $resultado = null

  $botao.addEventListener('click', () => {

    if ($table) {
      $table.remove()
      $resultado.remove()
    }

    $table = criarEl('table', null, $form, {className: 'table table-stripe my-2'})
    let $thead = criarEl('thead', null, $table, {className: 'thead-dark'})
    criarEl('th', 'Matricula', $thead, {scope: 'col'})
    criarEl('th', 'Nota', $thead, {scope: 'col'})
    criarEl('th', 'Situação', $thead, {scope: 'col'})

    let $tbody = criarEl('thead', null, $table)

    let qtd_alunos = 20
    let alunos = []
    for (let i = 1; i <= qtd_alunos; i++) {
      let aluno = new Aluno(i)
      alunos.push(aluno)

      let $tr = criarEl('tr', null, $tbody)
      criarEl('td', aluno.nr, $tr)
      criarEl('td', aluno.nota, $tr)
      let $situacao = criarEl('td', '', $tr)
      let className = 'badge badge-pill ' + (aluno.situacao === 'aprovado' ? 'badge-success' : 'badge-danger')
      criarEl('span', aluno.situacao, $situacao, {className})
    }

    let lista_aprovados = alunos.filter((a) => a.situacao === 'aprovado')
    let aprovados = lista_aprovados.length

    let reprovados = qtd_alunos - aprovados
    let p_aprovado = (aprovados / qtd_alunos) * 100
    let p_reprovado = (reprovados / qtd_alunos) * 100

    let resultado = `APROVADOS: ${aprovados} (${p_aprovado.toFixed()}%) | REPROVADOS: ${reprovados} (${p_reprovado.toFixed()}%)`
    $resultado = criarEl('div', resultado, $pai, {className: 'alert alert-primary mt-2'})
  })

}
window.componentes.push(criarComponentes3)

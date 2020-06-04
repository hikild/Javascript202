let $campo = document.querySelector('.js-usuario')
$campo.addEventListener('keydown', function (e) {
  if (e.key === "Enter") {
    consulta(e.target.value)
  }
})

function consulta(valor) {
  // LIMPANDO O RESULTADO
  let $resultado = document.querySelector('.js-resultado')
  while ($resultado.hasChildNodes()) {
    $resultado.lastChild.remove()
  }
  $resultado.innerText = 'Carregando'

  let url = 'https://api.github.com/users/' + valor
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      while ($resultado.hasChildNodes()) {
        $resultado.lastChild.remove()
      }

      let $h1 = document.createElement('h1')
      $h1.innerText = data.login
      $resultado.append($h1)

      let $h2 = document.createElement('h2')
      $h2.innerText = data.name
      $resultado.append($h2)

      let $h3 = document.createElement('h3')
      $h3.innerText = data.followers
      $resultado.append($h3)

      let $img = document.createElement('img')
      $img.src = data.avatar_url
      $resultado.append($img)
    })
}


let origem = 'USD'
let url2 = `https://api.exchangeratesapi.io/latest?base=${origem}`

fetch(url2).then(r => r.json()).then((dado) => {

  let $ul = document.querySelector('.js-cotacao')

  //   for (let chave in dado.rates) {
  for (let chave of Object.keys(dado.rates)) {
    let cotacao = dado.rates[chave].toLocaleString('pt-BR', {style: 'currency', currency: chave})
    let $li = document.createElement('li')
    $li.innerText = cotacao
    $ul.append($li)
  }

})

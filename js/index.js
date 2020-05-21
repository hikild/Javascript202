let $campo = document.getElementById('campo')
let $campoQS = document.querySelector('#campo')

let $h1 = document.getElementsByTagName('h1')[0]
let $h1QS = document.querySelector('h1')  // primeiro elemento html que bate com a query
let $h1_QS = document.querySelectorAll('h1')[0]

let $h2 = document.getElementsByClassName('posicao')[0]
let $h2QS = document.querySelector('.posicao')  // primeiro elemento html que bate com a query
let $h2_QS = document.querySelectorAll('.posicao')[0]

let $exemplo = document.getElementsByName('exemplo')[0]
let $exemploQS = document.querySelector('[name="exemplo"]')  // primeiro elemento html que bate com a query
let $exemplo_QS = document.querySelectorAll('[name="exemplo"]')[0]

$exemplo.style = 'background: yellow'
$exemplo.style.background = 'yellow'

document.querySelector('.primeira').querySelector('h3').innerText = 'primeiro'

document.querySelector('.segunda h3').innerText = 'segundo'


$campo.addEventListener('mouseover', (e) => {
  $h1.innerText = 'ola'
})

$campo.addEventListener('mousemove', () => {
  $h1.innerText += '!'
})

$campo.addEventListener('mouseleave', (e) => {
  $h1.innerText = ''
})

document.addEventListener('mousemove', (e) => {
  $h2.innerText = `${e.pageX} x ${e.pageY}`
})

let $clique = document.querySelector('.js_clique')
$clique.addEventListener('click', (e) => {
  alert('houve um clique')
})

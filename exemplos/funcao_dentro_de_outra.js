
function comparacao2(x, y){
  return x.preco - y.preco
}

function qualquer(){
  let a = 0
  let lista = [
    {item: 'livro', preco:10},
    {item: 'caderno', preco:5},
    {item: 'caneta', preco:8},
    {item: 'lapis', preco:2},
    {item: 'borracha', preco:1},
  ]

  function comparacao1(x, y){
    console.log(a++)
    return x.preco - y.preco
  }

  let comparacao3 = function(x, y){
      return x.preco - y.preco
  }

  let comparacao4 = (x, y) => x.preco - y.preco
  lista.sort(comparacao4)

  console.log(lista)
}

qualquer()

const arquivo = require('./arquivo')

let sucesso = function (conteudo) {
  console.log('sucesso', conteudo)
}

let erro = function(a){
  console.log('deu erro', a)
}

// arquivo.abreArquivo('exem2plo.txt', sucesso, erro)
arquivo.escreveArquivo('exemplo2.txt', 'conteudo alskdj alsdjk ', sucesso, erro)

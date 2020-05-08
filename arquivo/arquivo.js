const fs = require('fs');

exports.abreArquivo = (path, callback_sucesso, callback_erro) => {

    fs.readFile(path, 'utf8', function(err, contents) {
        if(err){
            callback_erro(err)
            return
        }
        callback_sucesso(contents)
    })
}

exports.escreveArquivo = (path, conteudo, callback_sucesso, callback_erro) =>{
    fs.writeFile(path, conteudo, function (err) {
        if(err){
            callback_erro(err)
            return
        }
        callback_sucesso(conteudo)
    })
}


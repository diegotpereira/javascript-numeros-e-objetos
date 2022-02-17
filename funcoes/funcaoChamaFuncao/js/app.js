function verificaMaiorIdade(nomePessoa, idadePessoa) {
    if (idadePessoa >= 18) {
        return nomePessoa + ' é maior de idade.'
    } else {
        return nomePessoa + ' tem menos de 18 anos.'
    }
}

function verificaIdade(nomePessoa, anoNascimento) {

    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoNascimento
    var mensagemRetorno = verificaMaiorIdade(nomePessoa, idade)
    console.log(mensagemRetorno)
}

var nome = 'Joana'
var nascimento = 2002
verificaIdade(nome, nascimento)

verificaIdade('Casssiano', 1998)

nome = 'John'
nascimento = 2015
verificaIdade(nome, nascimento)
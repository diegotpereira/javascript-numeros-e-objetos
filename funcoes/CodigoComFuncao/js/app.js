function verificarIdade(nomePessoa, anoNascimento) {

    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoNascimento


    if (idade >= 18) {
        return nomePessoa + ' é maior de idade.'
    } else {
        return nomePessoa + ' tem menos de 18 anos.'
    }
}

var nome = 'Joana'
var nascimento = 2002

console.log(verificarIdade(nome, nascimento))
console.log(verificarIdade("Cassiano", 1998))

nome = 'John'
nascimento = 2014
var texto = verificarIdade(nome, nascimento)
console.log(texto)
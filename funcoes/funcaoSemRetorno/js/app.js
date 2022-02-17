function verificaIdade(nomePessoa, anoDeNascimento) {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - anoDeNascimento

    if (idade >= 18) {
        console.log(nomePessoa + ' é maior de idade')
    } else {
        console.log(nomePessoa + ' tem menos de 18 anos')
    }
}
var nome = 'Joana'
var nascimento = 2001

verificaIdade(nome, nascimento)

verificaIdade('Cassiano', 1988)

verificaIdade('Davi', 2015)

nome = 'John'
nascimento = 1978

verificaIdade(nome, nascimento)
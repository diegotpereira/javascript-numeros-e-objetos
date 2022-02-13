// O Abstract Factory é uma variação do padrão Factory Method que 
// fortifica o princípio de “Programe para interfaces e não para 
// implementações”

function Colaborador(nome) {
    this.nome = nome 

    this.falar = function() {
        console.log("eu sou colaborador: " + nome);
    }
}

function ColaboradorFactory() {
    this.criar = function(nome) {
        return new Colaborador(nome)
    }
}




function Fornecedor(nome) {
    this.nome = nome 

    this.falar = function() {
        console.log("eu sou Fornecedor: " + nome);
    }
}

function FornecedorFactory() {
    this.criar = function(nome) {
        return new Fornecedor(nome)
    }
}


function rodar() {
    var pessoas = []
    var colaboradorFactory = new ColaboradorFactory()
    var fornecedorFactory = new FornecedorFactory()

    pessoas.push(colaboradorFactory.criar("João Silva"))
    pessoas.push(colaboradorFactory.criar("Carlos Sains"))
    pessoas.push(fornecedorFactory.criar("Daniel Johns"))
    pessoas.push(fornecedorFactory.criar("Nicolas Tesla"))

    for(var index = 0, len = pessoas.length; index < len; index++) {
        pessoas[index].falar()
    }
}


rodar()
var Hipoteca = function (nome) {
    this.nome = nome;
}

Hipoteca.prototype = {
    concorra: function (quantia) {
        var resultado = "aprovado"

        if(!new Banco().verifique(this.nome, quantia)) {
            resultado = "negado"
        } else if(!new Crediario().get(this.nome)) {
            resultado = "negado"
        } else if(!new Fundo().verifique(this.nome)) {
            resultado = "negado"
        }
        return this.nome + " foi " + resultado + " para a quantia " + quantia  + " no valor da hipoteca"
    }
}

var Banco = function() {
    this.verifique = function(nome, quantia) {

        return true;
    }
}

var Crediario = function() {
    this.get = function(nome) {

        return true
    }
}

var Fundo = function() {
    this.verifique = function(nome) {

        return true 
    }
}

function rodar() {
    var hipoteca = new Hipoteca("Bob Marley")
    var resultado = hipoteca.concorra("R$100,000")

    console.log(resultado);
}


rodar()
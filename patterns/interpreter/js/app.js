// O padrão de design do Interpreter avalia/interpreta 
// as instruções escritas em uma gramática ou notações 
// de idiomas. Esse padrão envolve a implementação de 
// uma interface de expressão que informa para interpretar 
// um contexto específico. Esse padrão é usado nos compiladores 
// ou analisadores ou expansões de macro.


var Contexto = function(entrada) {
    this.entrada = entrada 
    this.saida = 0
}

Contexto.prototype = {
    comecaCom: function(str) {

        return this.entrada.substr(0, str.length) === str 
    }
}

var Expressao = function(nome, um, quatro, cinco, nove, multiplicar) {
    this.nome = nome 
    this.um = um 
    this.quatro = quatro 
    this.cinco = cinco 
    this.nove = nove 
    this.multiplicar = multiplicar
}

Expressao.prototype = {
    interpret: function(contexto) {
        if(contexto.entrada.length == 0) {
            return 
        } else if(contexto.comecaCom(this.nove)) {
            contexto.saida += (9 * this.multiplicar)
            contexto.entrada = contexto.entrada.substr(2)
        } else if(contexto.comecaCom(this.quatro)) {
            contexto.saida += (4 * this.multiplicar)
            contexto.entrada = contexto.entrada.substr(2)
        } else if(contexto.comecaCom(this.cinco)) {
            contexto.saida += (5 * this.multiplicar)
            contexto.entrada = contexto.entrada.substr(1)
        }
        while(contexto.comecaCom(this.um)) {
            contexto.saida += (1 * this.multiplicar)
            contexto.entrada = contexto.entrada.substr(1)
        }
    }
}


function rodar() {
    var romano = "MCMXXVIII"
    var contexto = new Contexto(romano)
    var expressao = []

    expressao.push(new Expressao("milhar", "M", " ", " ", " ", 1000))
    expressao.push(new Expressao("centena", "C", "CD", "D", "CM", 100))
    expressao.push(new Expressao("dezena", "X", "XL", "L", "XC", 10))
    expressao.push(new Expressao("unidade", "I", "IV", "V", "IX", 1))

    for(var index = 0, len = expressao.length; index < len; index++) {
        expressao[index].interpret(contexto)
    }

    console.log(romano + " = " + contexto.saida);
}

rodar()
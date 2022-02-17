// objeto command é de fato representativo 
// de um verbo, em vez de um substantivo 
// como a maioria dos objetos é. Outra maneira 
// de dizer é que o padrão Command é uma maneira
//  de encapsular a invocação de um método.

function add(x, y) {
    return x + y 
}

function sub(x, y) {
    return x - y 
}

function mul(x, y) {
    return x * y 
}

function div(x, y) {
    return x / y 
}

var Command = function(executar, desfazer, valor) {
    this.executar = executar 
    this.desfazer = desfazer
    this.valor = valor
}

var AddCommand = function(valor) {
    return new Command(add, sub, valor)
}

var SubCommand = function(valor) {
    return new Command(add, sub, valor)
}

var MulCommand = function(valor) {
    return new Command(add, sub, valor)
}

var DivCommand = function(valor) {
    return new Command(add, sub, valor)
}

var Calculadora = function() {
    var atual = 0
    var commands = []

    function acao(command) {
        var nome = command.executar.toString().substr(9, 3)

        return nome.charAt(0).toUpperCase() + nome.slice(1)

    }

    return {
        executar: function(command) {
            atual = command.executar(atual, command.valor)
            commands.push(command)

            console.log(acao(command) + ": " + command.valor);
        },

        desfazer: function() {
            var command = commands.pop()
            atual = command.desfazer(atual, command.valor)

            console.log("Desfazer " + acao(command) + ": " + command.valor);
        },
        getAtualValor: function() {

            return atual
        }
    }
}

function rodar() {

    var calculadora = new Calculadora()

    // emitir comandos
    calculadora.executar(new AddCommand(100))
    calculadora.executar(new SubCommand(24))
    calculadora.executar(new MulCommand(6))
    calculadora.executar(new DivCommand(2))

    // inverter os dois últimos comandos
    calculadora.desfazer()
    calculadora.desfazer()

    console.log("\nValor: " + calculadora.getAtualValor());
}

rodar()
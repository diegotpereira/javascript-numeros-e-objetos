// Função original
function LivroFuncao(tipo, autor) {
    this.tipo = tipo
    this.autor = autor
    this.buscarDetalhes = function() {

        return this.tipo + " escrito por " + this.autor 
    }
}

var livro = new LivroFuncao("Ficção", "Peter King")

console.log(livro.buscarDetalhes())

// esse exemplo poder ser convertido em classe
class LivroClasse {
    constructor(tipo, autor) {
        this.tipo = tipo
        this.autor = autor
        this.buscarDetalhes = function () {

            return this.tipo + " escrito por " + this.autor
        }
    }
}

var livro = new LivroClasse("Ficção", "Peter King")

console.log(livro.buscarDetalhes())

var circulo = {
    raio: 10,
    area: function() {
        return Math.PI * this.raio * this.raio
    }
}

console.log(circulo.area())
console.log(typeof circulo.area)

// ---------------------------

function negacao(f) {
    return function(i) {
        return !f(i) 
    }
}

var ehNumero = negacao(isNaN)

console.log(ehNumero(5))
console.log(ehNumero(NaN))
console.log(ehNumero("A"))


// ------------------------------------------
var ehPrimo = function(numero) {
    var divisor = parseInt(numero / 2, 10)
    var primo = true 

    while(divisor > 1) {
        if(numero % divisor === 0) {
            primo = false 
            divisor = 0
        } else {
            divisor -= 1
        }
    }
    return primo === true 
}

function negacao(f) {
    return function(i) {
        return !f(i)
    }
}

var ehComposta = negacao(ehPrimo)

console.log([2, 4].every(ehComposta))
console.log([4, 6].every(ehComposta))

// ---------------------------------------------


function original() {

    original.message = "Oi"
    var copia = original

    console.log(original.message)
    console.log(copia.message)

    copia.message = "Saudações"

    console.log(original.message)
    console.log(copia.message)

}

// ----------------------------------------
console.log("Função Original")
function original() {
    console.log("Eu sou original")
}

var copia = original
copia()

original = function() {
    console.log("Eu sou alterada");
}

original()
copia()


// -------------------------------------------------------
function acao(callback, x, y) {
    var resultado = callback(x, y)
    console.log(resultado)
}

function add(x, y) {
    return x + y
}

function multiplo(x, y) {
     return x * y
}

acao(add, 2, 3)
acao(multiplo, 2, 3)

$("#blue").hide(2000)
alert("Completo animação 1..")

$("#red").hide(2000, function() {
    alert("Completo animação 2..")
})

function nome(primeiro, ultimo) {

    return primeiro + " " + ultimo
}

console.log(nome("Fulano", "de Tal"));

// -------------------------------------------------
function nome(primeiro, ultimo) {
    if (typeof ultimo === 'undefined') {
        
        return function(ultimo) {
            return primeiro + " " + ultimo 
        }
    }

    return primeiro + " " + ultimo
}

console.log(nome("Jimi", "Hendrix"))

var parcialNome = nome("Jimi")

console.log(parcialNome("Hendrix"))
console.log(parcialNome("Joe"))



// ------------------------------------------------
Function.prototype.curry = function() {
    var f = this
    var curryArgs = Array.prototype.slice.call(arguments)

    
    // Retorna uma função que retorna o resultado
    // de invocar a função original
    return function() {
        return f.apply(this, curryArgs.concat(
            Array.prototype.slice.call(arguments)))
    }
}

function exibir(mensagem) {
    console.log(mensagem)
}

var coringa = exibir.curry("Dois amigos entram em um bar...")

coringa()
coringa()
coringa()

// -----------------------------------------------------------------

// O método bind() cria uma nova função que, quando chamada, tem sua palavra-chave 
// this definida com o valor fornecido, com uma sequência determinada de argumentos 
// precedendo quaisquer outros que sejam fornecidos quando a nova função é chamada.
function area(altura) {
    return this.largura * altura 
}

var obj = { largura: 5 }
var limite = area.bind(obj)

console.log(limite(4))

function add(x, y, z) {
    return x + y + z
}

var parcial = add.bind(null, 1, 2)

var resultado = parcial(3)

console.log(resultado)


function unidadeConversao(paraUniDade, fator, deslocado, entrada) {
    deslocado = deslocado || 0

    return [((deslocado + entrada) * fator).toFixed(2), paraUniDade].join(" ")
}

var metrosParaKm = unidadeConversao.bind(null, 'km', 0.001, 0)
var kgParaGramas = unidadeConversao.bind(null, 'gramas', 1000, 0)

console.log(kgParaGramas(3.7))
console.log(metrosParaKm(2000))


// ------------------------------------------------------------------------------
function contarCarro() {
    var contar = 0
    var incrementar = function() {
        return ++contar 
    }
    return incrementar 
}

console.log(contarCarro())
console.log(contarCarro())
console.log(contarCarro())
console.log(contarCarro())

// -----------------------------------------------

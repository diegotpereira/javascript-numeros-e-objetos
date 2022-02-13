// O método JSON.parse() analisa uma string JSON, 
// construindo o valor ou um objeto JavaScript descrito pela string. 
// Uma função reviver opcional pode ser fornecida para executar uma 
// transformação no objeto resultante antes de ser retornada.


var json = '{"primeiroNome":"kim", "sobrenome":"Taylor", "codigoEstudante":7}'
var estudante = JSON.parse(json)

console.log(estudante.primeiroNome + " " + estudante.sobrenome);

// ----------------------------------------------------------------------------
function reviver(chave, valor) {
    var num = Date.parse(valor)

    if (num) {
        return new Date(num)
    }

    return valor
}

var json = '{"nome": "kurt", "datanascimento" : "2000-05-18T11:20:00.000Z"}'
var estudante = JSON.parse(json, reviver)
console.log(estudante.datanascimento)


// -----------------------------------------------------------------------------

// O método JSON.stringify() converte valores em javascript para uma String  JSON. 
// Esses valores podem ser substituidos especificando a função replacer, 
// ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.
var pontos = { "Java" : 70, "Javascript" : 80, "C#" : 30}

var passado = JSON.stringify(pontos, function(chave, valor) {
    if(valor < 40) {

        return undefined
    } else {
        return valor
    }
})

console.log(passado)


// --------------------------------------------------------------------

// JSON with Ajax
// Obtenha o XmlHttpRequest específico do navegador
function criarXHRObject() {
    if(window.ActiveXObject) {
        return new ActiveXObject("Micrsoft.XMLHTTP")
    } else if(window.XMLHttpRequest) {
        return new XMLHttpRequest()
    }
}

function Estudante(nome, curso) {
    this.nome = nome,
    this.curso = curso
}

function buscaEstudantePontos() {
    var estudante = new Estudante("Bob", "Marley", "Aprendizado com Javascript")
    var json = JSON.stringify(estudante)
    var xmlHttp = criarXHRObject()


    // abre a conexão com o servidor web com o
    // objeto XMLHttpRequest. pontos.php é o servidor web
    // página de onde obteremos a resposta JSON
    xmlHttp.open("POST", "pontos.php", true)


    // armazena o nome de uma função a ser chamada
    // automaticamente toda vez que a propriedade readyState muda
    xmlHttp.onreadystatechange = handleServerResponse

    // send the header information along with the request
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xmlHttp.setRequestHeader("Content-length", json.length)
    xmlHttp.setRequestHeader("Connection", "close")

    // send the JSON-encoded Student object to the server 
    // using the XMLHttpRequest object
    xmlHttp.send(json)
}

function handleServerResponse() {
    // readState mantém o status do XMLHttpRequest.
    // 4 significa que a solicitação foi finalizada e a resposta está pronta.
    if (xmlHttp.readState == 4) {
        if(xmlHttp.status == 200) {

            var estudantePontos = JSON.parse(hmlHttp.responseText)
        }
    } else if(xmlHttp.status == 400) {

    }
}

buscaEstudantePontos()
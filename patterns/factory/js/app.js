

var Factory = function() {
    this.criarColaborador = function(tipo) {
        var colaborador     

        if (tipo === "integral") {
            colaborador = new Integral()
        } else if(tipo === "meioPeriodo") {
            colaborador = new MeioPeriodo()
        } else if(tipo === "temporario") {
            colaborador = new Temporario()
        } else if(tipo === "contratar") {
            colaborador = new Contratar()
        }

        colaborador.tipo = tipo;

        colaborador.falar = function () {
            console.log(this.tipo + ": a taxa " + this.deHoraEmHora + "/hora");
        }
        return colaborador
    }
}

var Integral = function() {
    this.deHoraEmHora = "R$12"
}

var MeioPeriodo = function() {
    this.deHoraEmHora = "R$11"
}

var Temporario = function() {
    this.deHoraEmHora = "R$10"
}

var Contratar = function() {
    this.deHoraEmHora = "R$15"
}

function rodar() {
    var colaboradores = []
    var factory = new Factory()

    colaboradores.push(factory.criarColaborador("integral"))
    colaboradores.push(factory.criarColaborador("meioPeriodo"))
    colaboradores.push(factory.criarColaborador("temporario"))
    colaboradores.push(factory.criarColaborador("contratar"))

    for(var index = 0, len = colaboradores.length; index < len; index++) {
        colaboradores[index].falar()
    }
}

rodar()
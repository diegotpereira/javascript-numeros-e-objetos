//  O padrão Bridge deve “desacoplar uma abstração de sua 
// implementação, de modo que as duas possam variar 
// independentemente.” Bridges são muito benéficas em caso 
// de aplicações orientadas a eventos, que são bastante 
// comuns em JavaScript.

// dispositivos de entrada
var Gestos = function(saida) {
    this.saida = saida 

    this.toque = function() {
        this.saida.clicar()
    }

    this.furtar = function() { 
        this.saida.mover()
    }

    this.panela = function() {
        this.saida.arrastar()
    }

    this.pitada = function() {
        this.saida.zoom()
    }
}

var Mouse = function(saida) {
    this.saida = saida

    this.clicar = function() {
        this.saida.clicar()
    }

    this.mover = function() { 
        this.saida.mover()
    }

    this.baixo = function() {
        this.saida.arrastar()
    }

    this.roda = function() {
        this.saida.zoom()
    }
}

// dispositivos de saida
var Tela = function() {
    this.clicar = function() {
        console.log("Seleção de tela");
    }
    this.mover = function() {
        console.log("Movimento de tela");
    }
    this.arrastar = function() {
        console.log("Arrastar tela");
    }
    this.zoom = function() {
        console.log("Zoom de tela");
    }
}

var Audio = function() {
    this.clicar = function() {
        console.log("Som de cliques");
    }
    this.mover = function() {
        console.log("Ondas sonoras");
    }
    this.arrastar = function() {
        console.log("Som estridente");
    }
    this.zoom = function() {
        console.log("Aumentar o volume do som");
    }
}

function rodar() {
    var tela = new Tela()
    var audio = new Audio()

    var controle = new Gestos(tela)
    var mouse = new Mouse(audio)

    controle.toque()
    controle.furtar()
    controle.pitada()

    mouse.clicar()
    mouse.mover()
    mouse.roda()
}

rodar()
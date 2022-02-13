// O objetivo desse padrão é construir as diversas 
// partes de uma classe ou objeto de forma independente 
// utilizando uma interface única.

function Loja() {
    this.construct = function(builder) {
        builder.step1()
        builder.step2()

        return builder.get()
    }
}

function CarroBuilder() {
    this.carro = null 

    this.step1 = function () {  
        this.carro = new Carro()
    }

    this.step2 = function () {
        this.carro.addPartes()
    }
    this.get = function() {
        return this.carro
    }
}

function CaminhaoBuilder() {
    this.caminhao = null 

    this.step1 = function() {
        this.caminhao = new Caminhao()
    }

    this.step2 = function() {
        this.caminhao.addPartes()
    }

    this.get = function() {
        return this.caminhao
    }
}

function Carro() {
    this.portas = 0

    this.addPartes = function() {
        this.portas = 4
    }
    this.falar = function() {
        console.log("Eu sou um " + this.portas + "-porta carro");
    }
}

function Caminhao() {
    this.portas = 0

    this.addPartes = function() {
        this.portas = 2
    }
    this.falar = function() {
        console.log("Eu sou um " + this.portas + "-porta caminhão");
    }
}

function rodar() {
    var loja = new Loja()
    var carroBuilder = new CarroBuilder()
    var caminhaoBuilder = new CaminhaoBuilder()
    var carro = loja.construct(carroBuilder)
    var caminhao = loja.construct(caminhaoBuilder)

    carro.falar()
    caminhao.falar()
}


rodar()
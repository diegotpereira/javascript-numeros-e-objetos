// O padrão flyweight cria o conceito de estados 
// externos e estados internos. Os estados externos 
// são todos os dados que podem ser alterados entre 
// uma instância e outra, enquanto o estado interno 
// são os dados imutáveis pertencentes a todas as 
// classes do grupo.

function Flyweight(fazer, modelo, processo) {
    this.fazer = fazer
    this.modelo = modelo
    this.processo = processo
}

var FlyweightFactory = (function() {
    var flyweights = {}

    return  {
        get: function(fazer, modelo, processo) {
            if(!flyweights[fazer + modelo]) {
                flyweights[fazer + modelo] = new Flyweight(fazer, modelo, processo) 
            }

            return flyweights[fazer + modelo]
        },
        getContar: function() {
            var contar = 0
            for(var f in flyweights) contar++

            return contar
        }
    }
})()

function  ColecaoComputadores() {
    var computadores = {}
    var contar = 0

    return {
        add: function(fazer, modelo, processo, memoria, tag) {
            new Computador(fazer, modelo, processo, memoria, tag) 
            contar++
            
        },

        get: function(tag){
            return computadores[tag]
        },
        getContar: function() {
            return contar
        }
    }
}
var Computador = function(fazer, modelo, processo, memoria, tag) {
    this.flyweight = FlyweightFactory.get(fazer, modelo, processo) 
    this.memoria = memoria
    this.tag = tag 
    this.getFazer = function() {
        return this.flyweight.fazer
    }
}

function rodar() {
    var computadores = new ColecaoComputadores()

    computadores.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computadores.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computadores.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computadores.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computadores.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computadores.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computadores.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computadores: " + computadores.getContar())
    console.log("Flyweights: " + FlyweightFactory.getContar())
}

rodar()
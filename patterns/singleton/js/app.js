var Singleton = (function () {
    var instancia

    function criarInstancia() {
        var objeto = new Object("Eu sou uma instacia")

        return objeto
    }

    return {
        getInstancia: function() {
            if(!instancia) {
                instancia = criarInstancia()
            }
            return instancia
        }
    }
})()

function rodar() {
    var instancia1 = Singleton.getInstancia()
    var instancia2 = Singleton.getInstancia()

    console.log("Mesma instância? " + (instancia1 === instancia2));
}

rodar()
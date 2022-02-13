// interface velha
function Entrega() {
    this.request = function(cepInicial, cepFinal, peso) {

        return "R$49.75"
    }
}

// interface nova
function AvancadaEntrega() {
    this.login = function(credenciais) {}
    this.definaInicio = function(iniciar) {}
    this.definaDestino = function(destino) {}
    this.calcular = function(peso) { return "R$39.50"}
}

// interface adapter
function EntregaAdapter(credenciais) {
    var envio = new AvancadaEntrega()

    envio.login(credenciais)

    return {
        request: function(cepInicial, cepFinal, peso) {
            envio.definaInicio(cepInicial)
            envio.definaDestino(cepFinal)

            return envio.calcular(peso)
        }
    }
}

function rodar() {
    var entrega = new Entrega() 
    var credenciais = { token: "30a8-6ee1"}
    var adapter = new EntregaAdapter(credenciais)

    // 
    var custo = entrega.request("78701", "10010", "2 lbs")
    console.log("Custo velho: " + custo)

    // 
    custo = adapter.request("78701", "10010", "2 lbs")

    console.log("Novo custo: " + custo);
}

rodar()
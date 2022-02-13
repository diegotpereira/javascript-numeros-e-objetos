// O Adapter assume o novo objeto que vamos usar e o 
// envolve ou o apenas faz sua mediação, dependendo 
// de como o objeto é usado, para combiná-lo com a 
// interface estabelecida pelo antigo objeto. No caso 
// de um objeto que sempre é instanciado com o operador new, 
// o Adapter irá envolvê-lo por conter uma instância do 
// objeto em si e passando as chamadas de função para ele. 
// Se o objeto é “estático”, no sentido de que há apenas 
// uma instância dele, então ele não será envolvido.






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
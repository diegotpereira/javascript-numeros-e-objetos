var Request = function(quantia) {
    this.quantia = quantia
    console.log("Solicitado: R$" + quantia + "\n")
}

Request.prototype = {
    get: function(fatura) {
        var contar = Math.floor(this.quantia / fatura)
        this.quantia -= contar * fatura

        console.log("Dispensar " + contar + " R$" + fatura + "faturas") 

        return this 
    }
}

function rodar() {

    solicitar = new Request(378)

    solicitar.get(100).get(50).get(20).get(10).get(5).get(1)
}

rodar()
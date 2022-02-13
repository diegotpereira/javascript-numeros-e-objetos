// O padrão prototype é a base de como as cadeias de herança no 
// JavaScript funciona. Este padrão ataca principalmente o uso 
// de recursos, permitindo que escondamos a complexidade de criar 
// uma nova instancia a partir do cliente através da clonagem de um 
// objeto já existente e modificação de seus parâmetros. O objeto 
// clonado age como um protótipo para o novo objeto que será instanciado.


// Este padrão geralmente utilizado quando uma instancia de um objeto
//  demora muito tempo para ser criado ou então consome muitos recursos, 
// algumas bibliotecas de bancos de dados, por exemplo, usam este padrão 
//para criar diversas instancias de conexões aos bancos, uma vez que o 
// processo de conexão pode ser lento e consumir muitos recursos.


function ClientePrototype(proto) {
    this.proto = proto

    this.clone = function() {
        var cliente = new Cliente()
        cliente.primeira = proto.primeira
        cliente.ultima = proto.ultima
        cliente.status = proto.status


        return cliente 
    }
}

function Cliente(primeira, ultima, status) {
    this.primeira = primeira
    this.ultima = ultima
    this.status = status

    this.falar = function() {
        console.log("nome: " + this.primeira + " " + this.ultima + ", status: " + this.status);
    }
}

function roda() {
    var proto = new Cliente("n/a", "n/a", "pendente")
    var protoType = new ClientePrototype(proto)

    var cliente = protoType.clone()
    cliente.falar()
}


roda()
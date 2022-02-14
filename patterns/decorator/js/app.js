// O Decorator Pattern é um mecanismo que 
// permite estender o comportamento de um 
//objeto em tempo de execução, adicionando 
// novas funcionalidades sem ter que criar 
//uma nova classe ou, no caso do JavaScript, 
// função construtora.

var Usuario = function(nome) {
    this.nome = nome;

    this.falar = function() {
        console.log("Usuário: " + this.nome);
    }
}

var UsuarioDecorado = function(usuario, rua, cidade) {
    this.usuario = usuario
    this.nome = usuario.nome
    this.rua = rua 
    this.cidade = cidade 

    this.falar = function() {
        console.log("Usuário com decorator: " + 
        this.nome + ", " + 
        this.rua + ", " + 
        this.cidade);
    }
}

function rodar() {
    var usuario = new Usuario("Joe")
    usuario.falar()

    var decorado = new UsuarioDecorado(usuario, "Av Brasil", "Ouro Preto")
    decorado.falar()
}

rodar()
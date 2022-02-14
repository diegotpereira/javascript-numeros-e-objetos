// O composite pattern diz que um grupo de objetos 
// pode ser tratado da mesma maneira que um objeto 
// individual desse grupo.

var Node = function(nome) {
    this.filhos = []
    this.nome = nome 
}

Node.prototype = {
    add: function(filho) {
        this.filhos.push(filho)
    },
    remover: function(filho) {
        var length = this.filhos.length
        for(var index = 0; index < length; index++) {
            if(this.filhos[index] === filho) {
                this.filhos.splice(index, 1)

                return 
            }
        }
    },
    getFilho: function(index) {
        return this.filhos[index]
    },
    temFilhos: function() {
        return this.filhos.length > 0
    }
}

function atravessar(indent, node) {
    console.log(Array(indent++).join("--"+ node.nome));

    for(var index = 0, len = node.filhos.length; index < len; index++) {
        atravessar(indent, node.getFilho(index))
    }
}

function rodar() {
    var arvore = new Node("raiz")
    var esquerda = new Node("esquerda")
    var direita = new Node("direita")
    var esquerdaesquerda = new Node("esquerdaesquerda")
    var esquerdadireita = new Node("esquerdadireita")
    var direitaesquerda = new Node("direitaesquerda")
    var direitadireita = new Node("direitadireita")

    arvore.add(esquerda)
    arvore.add(direita)
    arvore.remover(direita)
    arvore.add(direita) 

    esquerda.add(esquerdaesquerda)
    esquerda.add(esquerdadireita)

    direita.add(direitaesquerda)
    direita.add(direitadireita)

    atravessar(1, arvore)
}

rodar()
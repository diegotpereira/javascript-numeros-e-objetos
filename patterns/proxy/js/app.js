// O objeto Proxy é usado para definir 
// comportamentos customizados para 
// operações fundamentais (por exemplo, 
// pesquisa de propriedade, atribuição, 
// enumeração, invocação de função, etc.).
function GeoCodigo() {
    this.getLatLng = function(endereco) {
        if(endereco ===  "Amsterdã") {
            return "52.3700° N, 4.8900° E"
        } else if(endereco === "Londres") {
            return "51.5171° N, 0.1062° W"
        } else if(endereco === "Paris") {
            return "48.8742° N, 2.3470° E"
        } else if(endereco === "Berlin") {
            return "52.5233° N, 13.4127° E"
        } else {
            return ""
        }
    }
}

function GeoProxy() {
    var geoCodigo = new  GeoCodigo()
    geocache = {}

    return {
        getLatLng: function(endereco) {
            if(!geocache[endereco]) {
                geocache[endereco] = geoCodigo.getLatLng(endereco)
            }
            console.log(endereco + ": " + geocache[endereco]);

            return geocache[endereco]
        },
        getContar: function() {
            var contar = 0

            for(var codigo in geocache) {
                contar++
            }

            return contar
        }
    }
}

function rodar() {
    var geo = new GeoProxy()

    geo.getLatLng("Paris")
    geo.getLatLng("Londres")
    geo.getLatLng("Londres")
    geo.getLatLng("Londres")
    geo.getLatLng("Londres")
    geo.getLatLng("Amsterdã")
    geo.getLatLng("Amsterdã")
    geo.getLatLng("Amsterdã")
    geo.getLatLng("Amsterdã")
    geo.getLatLng("Londres")
    geo.getLatLng("Londres")

    console.log("\nCahe tamanho: " + geo.getContar());
}

rodar()
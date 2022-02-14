// O método concat é utilizado para juntar dois ou 
// mais vetores a um vetor que invoca a função. 
// Os objetos iniciais não são alterados, apenas 
// o resultado é um vetor contendo os dados do 
// primeiro array seguido dos elementos dos arrays 
// passados como parâmetro.

var vetor1 = new Array(1, 2, 3)
var vetor2 = new Array(4, 5, 6)
var vetor3 = new Array(7, 8, 9)
var resultado = vetor1.concat(vetor2, vetor3)

document.write(resultado)
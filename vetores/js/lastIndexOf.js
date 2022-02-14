// Semelhante ao indexOf, mas retorna 
// a posição da última ocorrência de 
// um elemento no vetor, ou seja, caso 
// o elemento apareça mais de uma vez 
// na lista, o retorno é a posição da última. 
// Da mesma forma que no indexOf, se o 
// elemento não existir na lista, o retorno é -1.

var vetor1 = new Array(1, 2, 3, 2, 7)
var indice = vetor1.lastIndexOf(2)
document.write(indice)
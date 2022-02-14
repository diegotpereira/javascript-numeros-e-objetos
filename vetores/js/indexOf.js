// Esta função recebe como parâmetro um valor 
// a ser localizado no array e retorna, caso 
// ele seja encontrado, a sua posição na lista. 
// A contagem das posições inicia em zero e 
// não em um como estamos acostumados em nosso 
// dia-a-dia. Caso o elemento não seja localizado, 
// o retorno é o valor -1.
var vetor1 = new Array(1, 2, 3, 4, 5)
var indice = vetor1.indexOf(3)
document.write(indice)
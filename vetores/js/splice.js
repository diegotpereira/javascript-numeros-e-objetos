// O splice serve para remover e/ou adicionar 
// items de/em um vetor. 
// A chamada a este método requer dois ou vários 
// (três ou mais) parâmetros.
// O primeiro parâmetro representa a posição 
// do elemento a ser 
// removido (começando do zero) e o segundo 
// indica a quantidade de elementos a serem 
// removidos do vetor, a partir da posição indicada. 
// Caso não se deseje remover nenhum item, 
// basta passar 0 (zero) como segundo parâmetro.

// Exemplo de uso do splice para remoção de elementos
var vetor1 = new Array(1, 2, 3, 4, 5)
vetor1.splice(1, 2)
document.write(vetor1)


// Exemplo de uso do splice para adição de elementos
var vetor1 = new Array(1, 2, 3, 4, 5)
vetor1.splice(1, 0, 9, 8)
document.write(vetor1)


// Exemplo de uso do splice para remoção e adição de elementos
var vetor1 = new Array(1, 2, 3, 4, 5)
vetor1.splice(1, 2, 9, 8)
document.write(vetor1)
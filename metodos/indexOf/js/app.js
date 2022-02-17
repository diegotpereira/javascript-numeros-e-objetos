// O método indexOf() retorna o índice da primeira 
// ocorrência do valor fornecido em searchValue, 
// começando a busca a partir de fromIndex. 
// Retorna -1 se o valor não for encontrado.

var arrPrato = new Array('Arroz', 'Tomate', 'Alface')
arrPrato.push('Feijao')

if (arrPrato.indexOf('Arroz') !== -1) {
    arrPrato.shift()
}
console.log(arrPrato)
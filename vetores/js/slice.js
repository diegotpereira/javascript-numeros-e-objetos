// A função slice recebe como parâmetros 
// dois valores inteiros e retorna uma 
// fração do vetor original com base nos 
// limites que foram informados. O primeiro 
// parâmetro indica a posição do primeiro 
// elemento do vetor a fazer parte da seleção, 
// enquanto o segundo indica a posição 
// seguinte a do último elemento selecionado 
// (um a mais que a posição deste).
var vetor1 = new Array(1, 2, 3, 4, 5)
var selecao = vetor1.slice(1, 4)
document.write(selecao)
// A função join pode ser chamada de duas formas: 
// na primeira não são informados parâmetros e o 
// retorno é um string contendo todos os elementos 
// do vetor separados por vírgula. Na segunda chamada 
// é informado um texto para ser vir como separador, 
// e o retorno é semelhante à primeira forma, mas no 
// lugar das vírgulas é exibido o separador indicado.
var vetor1 = new Array(1, 2, 3, 4, 5)
var elementos = vetor1.join("-")
document.write(elementos)
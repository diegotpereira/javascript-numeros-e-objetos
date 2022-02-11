import '../css/estilo.css'
let num1 = 10
let num2 = 3
let f1 = 5.02
let neg = -3.8

let soma = num1 + num2
let fsoma = f1 + num2
let multiplicao = num1 + num2
let fmultiplicacao = f1 * neg
let divisao = num1 / num2
let fdivisao = num1 / f1;
let mod = num1 % num2;

const operacao = document.getElementById('app')
operacao.innerHTML = `<p> Veja alguns exemplos de operações matemáticas:</p>
                      <ul>
					     <li>${num1} + ${num2} = ${soma}</li>
						 <li>${f1} + ${num2} = ${fsoma}</li>
						 <li>${num1} * ${num2} = ${multiplicao}</li>
						 <li>${f1} * ${neg} = ${fmultiplicacao}</li>
						 <li>${num1} / ${num2} = ${divisao}</li>
						 <li>${num1} / ${f1} = ${fdivisao}</li>
						 <li>${num1} % ${num2} = ${mod}</li>
					  </ul>`;

let abertura = `<h3>Olá, Boas Vidas</h3>`;

let curiosidade1 = "De acordo com a especificação, os dados tipo number " +
    "são armazenados em estruturas de 64bits conforme o padrão <b>IEEE 754</b>";
let curiosidade2 = "Algumas implementações utilizam estruturas de " +
    "<strong>32 bits</strong> para armazenar <strong>números inteiros</strong>";

let curiosidade3 = "Podemos realizar as operações matemáticas comuns com o " +
    "tipos number: <strong>soma, subtração, multiplicação e divisão</strong>";

let topoDaTela = `${abertura}
                 <p> Veja algumas curiosidades a respeito do tipo number:
				 </p>
				 <ul>
				     <li>${curiosidade1}</li>
					 <li>${curiosidade2}</li>
					 <li>${curiosidade3}</li>
				 </ul>`;




const topo = document.getElementById('topo')
topo.innerHTML = topoDaTela
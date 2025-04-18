// Função para gerar a tabuada de 1 a 10 e dividir em tabelas separadas
function gerarTabuada() {
	let tabuadaDivs = [];
	for (let i = 1; i <= 10; i++) {
		let tabuadaHTML = '<table>';
		tabuadaHTML += `<tr><th>Tabuada de ${i}</th></tr>`;
		for (let j = 1; j <= 10; j++) {
			tabuadaHTML += `<tr><td>${i} x ${j}</td><td>${i * j}</td></tr>`;
		}
		tabuadaHTML += '</table>';

		tabuadaDivs.push(tabuadaHTML);
	}

	for (let i = 0; i < 10; i++) {
		document.getElementById(`tabuada${i + 1}`).innerHTML = tabuadaDivs[i];
	}
}

// Funções da calculadora
let display = document.getElementById('display');
let valorAtual = '';
let operador = '';
let num1 = 0;

function adicionarValor(valor) {
	valorAtual += valor;  // Adiciona o número ao valor atual
	display.value = valorAtual;  // Atualiza o display
}

function operacao(op) {
	if (valorAtual !== '') {
		num1 = parseFloat(valorAtual);
		operador = op;
		valorAtual = '';  // Reseta o valor para a próxima operação
	}
}

function limparDisplay() {
	valorAtual = '';  // Limpa tudo do display
	display.value = '';
}

function apagarUltimoCaractere() {
	valorAtual = valorAtual.slice(0, -1);  // Apaga o último caractere
	display.value = valorAtual;  // Atualiza o display
}

function calcularResultado() {
	if (valorAtual !== '') {
		let num2 = parseFloat(valorAtual);
		let resultado = 0;
		switch (operador) {
			case '+':
				resultado = num1 + num2;
				break;
			case '-':
				resultado = num1 - num2;
				break;
			case '*':
				resultado = num1 * num2;
				break;
			case '/':
				resultado = num1 / num2;
				break;
		}
		display.value = resultado;
		valorAtual = resultado.toString();
	}
}

// Gera a tabuada assim que a página carrega
window.onload = gerarTabuada;

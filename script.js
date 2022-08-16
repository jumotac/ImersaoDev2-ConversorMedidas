var pesoCorporalEmTexto = prompt('Quantos listros de água você deve beber por dia? Informe o seu peso e descubra');

var pesoCorporalEmNumero = parseFloat(pesoCorporalEmTexto);
var quantidadeDeAgua = pesoCorporalEmNumero * 0.035;
var quantidadeDeAguaFixado = quantidadeDeAgua.toFixed(3);

alert(quantidadeDeAguaFixado + ' Litros')
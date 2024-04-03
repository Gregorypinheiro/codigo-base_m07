const numero = 1234567.89;
const numeroFormatado = numero.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

console.log(numeroFormatado);
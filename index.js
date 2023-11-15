// alert('Olá Mundo')
const handleClick = () => {
    let valorDigitado = document.getElementById('valorAConverter').value;
    // alert(valorDigitado)
    // obterValor(valorDigitado)
    document.getElementById('resultado').innerText = `O valor Convertido é: R$ ${valorDigitado*4.91}`
}

// const obterValor = (valor) => {
//     return valor
// }


// alert('Olá Mundo')

let selectIn = document.getElementById("inCoin")
let selectOut = document.getElementById("outCoin")
let options = [
    {text: '-', value: ""},
    {text: "Dólar Americano", value: "USD"},
    {text: "Dólar Canadense", value: "CAD"},
    {text: "Libra Esterlina", value: "GBP"},
    {text: "Euro", value: "EUR"},
    {text: "Real Brasileiro", value: "BRL"},
    {text: "Bitcoin", value: "BTC"}
]
let valueIn = ''
let valueOut = ''

let baseUrl = "https://economia.awesomeapi.com.br/last/"
let url = ''
let dataCoin = ''
let convertedValue = 0;

const requisition = async (url, moeda) =>{
    let valueBid
    try{
        const resposta = await fetch(url);
        if(!resposta.ok){
            throw new Error(`Erro na requisição: ${resposta.status}`)
        }
        const dados = await resposta.json();
        valueBid = dados[moeda].bid
        console.log(valueBid)
    }catch (erro){
        console.error('Erro na requisição', erro)
    }
    return valueBid
}


const handleClick = async () => {

    let valorDigitado = document.getElementById('valorAConverter').value;
    url = `${baseUrl}${valueIn}-${valueOut}`
    dataCoin = `${valueIn}${valueOut}`
    if (valueIn=='' || valueOut == ''){
        alert("Selecione os valores das moedas para conversão")
    }else if(valorDigitado == "") {
        alert("DIgite um valor a ser convertido")
    }else {
        try {
            convertedValue = await requisition(url, dataCoin) 
            console.log(`Valor: ${convertedValue}`)
        
        document.getElementById('resultado').innerText = (convertedValue * valorDigitado).toFixed(2)
        }catch (error){
            console.error("Erro ao converter a moeda", error)
        }
        
    }
}

const fillSelect = () => {

    options.forEach((opcao)=>{
        let optionElement = document.createElement("option");
        optionElement.value = opcao.value;
        optionElement.text = opcao.text;
        selectIn.appendChild(optionElement);
        
        let optionElementOut = document.createElement("option");
        optionElementOut.value = opcao.value;
        optionElementOut.text = opcao.text;
        selectOut.appendChild(optionElementOut);
    })
}

selectIn.addEventListener("change", ()=>{
    valueIn = selectIn.value;
    console.log(valueIn);
    console.log(valueOut)
})

selectOut.addEventListener("change", ()=>{
    valueOut = selectOut.value;
    console.log(valueOut)
    console.log(valueIn);
})



window.onload = fillSelect



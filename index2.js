const execute = () => {

    const numeroAleatorioInteiro = parseInt(Math.random() * 1000) + 1;
    console.log(numeroAleatorioInteiro);
    let chances = 1;
    let maior = 1000;
    let menor = 0;

    let chute = prompt("Digite um numero entre 1 e 1000");

    while (chute != numeroAleatorioInteiro){
        if(chute > numeroAleatorioInteiro){
            if(chute < maior)
                maior = chute;
            chute = prompt(`O número é menor \nDigite um número entre ${menor} e ${maior}`)
            
        }else if (chute < numeroAleatorioInteiro){
            if(chute > menor)
                menor = chute;
            chute = prompt(`O número é maior \nDigite um número entre ${menor} e ${maior}`)
            
        };
        chances += 1;
    }
    alert(`Você Acertou! O número é ${numeroAleatorioInteiro}.\nForam feitas ${chances} tentativas`);
    location.reload(); 
};


window.onload = execute;
// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//
// 1. O código inicia um loop que adiciona 1 à variável i e a soma a variável valor até que a condição de i < 5 é concluída. Será impresso 10.
//
// 2. a. Ele checa em todo o array lista quais números são maiores de 18 e os imprime no console.
// b. Sim. Remover toda a lógica if e adicionar console.log(lista.indexOf(numero)) ao loop.
//
// 3. Seriam impressas 4 linhas, cada linha com uma spring com seu respectivo número de asteriscos.

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// 1.
{
    const numPets = Number(prompt("Quantos pets você tem:"))
    let nomesPets = []
    if(numPets===0){
        console.log("Que pena! Você devia adotar vários pets!!")
    }else{
        for(i=0 ; i < numPets ; i++){
            nomesPets.push(prompt("Quais os nomes de seus pets:"))
        }
    }
    console.log(nomesPets)
}

// 2.
{
    let arrayOrigin = [23, 42, 65, 32, 12]
    let imprimirValores = array => {
        for(let i=0; i < array.length; i++){
            console.log(array[i])
        }
    }
    let dividirPor10 = array => {
        for(let i=0 ; i< array.length; i++){
            let div = array[i]/10
            console.log(div)
        }
    }
    let mostrarPares = array =>{
        let numPares = []
        for(let i=0 ; i< array.length; i++){
            let checagem = array[i] % 2
            if(checagem === 0){
                numPares.push(array[i])
            }
        }
        console.log(numPares)
    }
    let imprimirStrings = array =>{
        let arrayStrings = []
        for(let i=0; i<array.length; i++){
            arrayStrings.push(`O elemento do índex ${i} é: ${array[i]}`)
        }
        console.log(arrayStrings)
    }
    let verificarMaiorMenor = array =>{
        let valorMaximo = 0
        let valorMinimo = 9999999999999
        
        for(let i=0; i < array.length ; i++){
            if(array[i] > valorMaximo){
                valorMaximo = array[i]
            }if(array[i]<valorMinimo){
                valorMinimo = array[i]
            }
        }
        console.log(`O maior número é o ${valorMaximo} e o menor é o ${valorMinimo}.`)
    }
    imprimirValores(arrayOrigin)
    dividirPor10(arrayOrigin)
    mostrarPares(arrayOrigin)
    imprimirStrings(arrayOrigin)
    verificarMaiorMenor(arrayOrigin)
}

// DESAFIOS

1.
{
    
    let numUser = Number(prompt("Diga um número:"))
    let acertou = 0
    let numTentativas = 0
    console.log("Vamos jogar!!")
    
    
    let verifNum = resposta =>{
        resposta = (Number(prompt("Qual número você acha que foi dito:")))
        if(numUser === resposta){
            numTentativas = numTentativas + 1
            console.log("Parabéns!! Você acertou!")
            console.log(`Número de chutes: ${numTentativas}`)
            acertou = 1
            return acertou
        }else 
        if(numUser < resposta){
            console.log(`O número chutado foi: ${resposta}`)
            console.log("Errou! O número é menor. Tente novamente.")
            numTentativas = numTentativas + 1
        }else
        if(numUser > resposta){
            console.log(`O número chutado foi: ${resposta}`)
            console.log("Errou! O número é maior. Tente novamente.")
            numTentativas = numTentativas + 1
        }
    }
        while(acertou !== 1){
            verifNum()
        }
}    

// 2.

{
    let numComp = Number(Math.floor((Math.random()*100) +1))
    console.log(numComp)
    let acertou = 0
    let numTentativas = 0
    console.log("Vamos jogar!!")
    
    
    let verifNum = resposta =>{
        resposta = (Number(prompt("Qual número você acha que foi dito:")))
        if(numComp === resposta){
            numTentativas = numTentativas + 1
            console.log("Parabéns!! Você acertou!")
            console.log(`Número de chutes: ${numTentativas}`)
            acertou = 1
            return acertou
        }else 
        if(numComp < resposta){
            console.log(`O número chutado foi: ${resposta}`)
            console.log("Errou! O número é menor. Tente novamente.")
            numTentativas = numTentativas + 1
        }else
        if(numComp > resposta){
            console.log(`O número chutado foi: ${resposta}`)
            console.log("Errou! O número é maior. Tente novamente.")
            numTentativas = numTentativas + 1
        }
    }
        while(acertou !== 1){
            verifNum()
        }
}    
// Meu único problema neste exercício é que quando abro o browser por algum motivo sempre tenho que recarregar a página, 
// senão os console.log não aparecem no console
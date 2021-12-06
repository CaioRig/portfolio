// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//
// 1. a. Ele checa se o resto do número dividido por 2 é igual a 0 e imprime no console se é ou não.
// b. Números pares
// c. Números ímpares
//
// 2. a. Ele imprime no console o preço de uma determinada fruta
// b. "O preço da fruta Maçã é R$2.25"
// c. "O preço da fruta Pêra é R$5" - ele substitui o preço real da pêra pelo preço default
//
// 3. a. Ela pede um número ao usuário
// b. No caso de 10, será impresso "Esse número passou no teste", pois 10 > 0. No caso de -10, nada será impresso no console além de um erro
// c. Sim. A variável mensagem está dentro do escopo da função e por isso não pode ser chamada no caso do segundo console.log, dando um erro

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//
// 1.
{
    const idade = Number(prompt("Quantos anos você tem:"))
    if(idade >= 18){
        console.log("Você pode dirigir!")
    }else{
        console.log("Você não pode dirigir!")
    }
}
// 2.
{
    const turno = prompt("Qual turno do dia você estuda (M/V/N):").toUpperCase()
    if(turno === "M"){
        console.log("Bom dia!")
    }else
    if(turno === "V"){
        console.log("Boa tarde!")
    }else
    if(turno === "N"){
        console.log("Boa noite!")
    }else{
        console.log("Este não é um turno do dia!")
    }
}
// 3.
{
    const turnoSwitch = prompt("Qual turno do dia você estuda (M/V/N):").toUpperCase()
    switch(turnoSwitch){
        case "M":
            console.log("Bom dia!")
        break
        case "V":
            console.log("Boa tarde!")
        break
        case "N":
            console.log("Boa noite!")
        break
        default:
            console.log("Este não é um turno do dia!")
    }
}
// 4.
{
    const genero = prompt("Qual o gênero do filme:").toLowerCase()
    const preco = Number(prompt("Qual o preço do filme:"))
    if((genero === "fantasia")&&(preco <= 15)){
        console.log("Bom filme!")
    }else{
        console.log("Escolha outro filme :(")
    }
}

// DESAFIOS
// 1.
{
    const genero = prompt("Qual o gênero do filme:").toLowerCase()
    const preco = Number(prompt("Qual o preço do filme:"))
    if((genero === "fantasia")&&(preco <= 15)){
        const lanchinho = prompt("Qual lanchinho você vai comprar para assistir:")
        console.log("Bom filme!")
        console.log(`Aproveite o seu ${lanchinho}!`)
    }else{
        console.log("Escolha outro filme :(")
    }
}
// 2.
{
    const carrinho= () =>{
    const nomeComp=prompt("Qual seu nome completo:")
    const tipoJogo=prompt("Qual o tipo de ingresso (IN/DO):")
    const etapaJogo=prompt("Qual a etapa do jogo (SF/DT/FI):")
    const categoriaJogo=prompt("Qual a categoria do jogo(1/2/3/4):")
    const quantIngresso=prompt("Quantos ingressos gostaria:")

    const compra ={
        nome: nomeComp,
        tipoDoJogo: tipoJogo,
        etapaDoJogo: etapaJogo,
        categoria: categoriaJogo,
        quantidadeDeIngressos: quantIngresso
    } 
    return compra
    }
    console.log(carrinho())
    const calcularPreco= () => {

    }
}

// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
//
// 1. a. Será impresso no console o número 10 e o número 50
// b. Não apareceria nada no console, pois return não imprime nada
//
// 2. a. Ela pega o texto inserido pelo usuário, transforma ele em letra minúscula e retorna um true/false se na frase possui a palavra cenoura.
// b. i. true
// ii. true
// iii. true

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//
// 1. a.
{
    function info(){
        console.log("1. a. Meu nome é Caio, tenho 27 anos, moro em Minas e sou estudante.")
    }
    info()
} 
// b.
{
    function informacoes(nome, idade, endereco, profissao){
        nome = prompt("Qual seu nome:")
        idade = Number(prompt("Quantos anos você tem:"))
        endereco = prompt("Qual o nome de sua cidade:")
        profissao = prompt("Qual a sua profissão:")

        const frase= `1. b. Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`
        return frase
    }
    console.log(informacoes())
}
// 2. a.
{
    function soma(n1,n2){
        n1 = Number(prompt("Digite o primeiro número:"))
        n2 = Number(prompt("Digite o segundo número:"))
        const somado = n1 + n2
        return somado
    }
    console.log(`2. a. ${soma()}`)
}
// b.
{
    function igual(n3,n4){
        n3 = Number(prompt("Digite o primeiro número:"))
        n4 = Number(prompt("Digite o segundo número:"))
        const maiorIg = n3 >= n4
        return maiorIg
    }
    console.log(`2. b. ${igual()}`)
}
// c.
{
    function par(n5){
        n5 = Number(prompt("Digite um número:"))
        const parS = (n5 % 2) === 0
        return parS
    }
    console.log(`2. c. ${par()}`)
}
// d. 
{
    function masc(mensagem){
        mensagem = prompt("Digite uma frase:").toUpperCase()
        let tamanhoMens = mensagem.length
        console.log(`2. d. ${mensagem}, ${tamanhoMens}`)
    }
    masc()
}
// 3.
{
    function operacoes(n6,n7){
        const soma = n6+n7
        const diferenca = n6-n7
        const mult = n6*n7
        const div = n6/n7
        console.log(`3. Números inseridos: ${n6} e ${n7} \nSoma: ${soma} \nDiferença: ${diferenca} \nMultiplicação: ${mult} \nDivisão: ${div}`)
    }
    operacoes(30, 3)
}

// DESAFIOS
// 1. a.
    const param = parametro => {
        console.log(`1. a. ${parametro}`)
    }
    param()
// b.
    const noReturn = (n8,n9)=>{
        n8=Number(prompt("Digite um número:"))
        n9=Number(prompt("Digite o segundo número:"))
        param(n8+n9)
    }
    noReturn()
// 2.
{
    function pitagoras(hip, cat1,cat2){
        cat1 = Number(prompt("Diga o primeiro cateto:"))
        cat2 = Number(prompt("Diga o segundo cateto:"))
        let hipQuad= Math.pow(hip, 2)
        let cat1Quad= Math.pow(cat1, 2)
        let cat2Quad= Math.pow(cat2, 2)
        hipQuad = cat1Quad + cat2Quad
        hip = Math.sqrt(hipQuad)
        return hip
    }
    console.log(`2. ${pitagoras()}`)
}